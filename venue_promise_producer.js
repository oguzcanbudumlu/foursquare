import request from 'request';
import LikePromiseProducer from './like_promise_producer.js';
import PromiseConsumer from './promise_consumer.js';
import config from './config.js'

export default class VenuePromiseProducer {
    produce(coordinates) {
        return coordinates.map(coordinate => this.getVenuesPromise(coordinate))
    }

    getVenuesPromise(coordinate) {
        const parameters = this.getRequestParametersForVenues(coordinate);
    
        return new Promise((resolve, reject) => {
            request(parameters,
                (err, res, body) => {
                    if(err) {
                        reject(res)
                    } else {
                        const venues = this.getVenues(body)
                        const likePromises = new LikePromiseProducer().produce(venues)
                        new PromiseConsumer().consume(likePromises)

                        resolve(venues);
                    }
                })
        } )
    }

    getRequestParametersForVenues(coordinate) {
        return {
            url: 'https://api.foursquare.com/v2/venues/explore',
            method: 'GET',
            qs: {
              client_id: config.fs.clientId,
              client_secret: config.fs.clientSecret,
              ll: `${coordinate.lat},${coordinate.lon}`,
              v: config.fs.version,
              section: 'food',
              radius: "500",
            },
        }
    }

    getVenues(responseBody) {
        return JSON.parse(responseBody).response.groups[0].items
    }
}
