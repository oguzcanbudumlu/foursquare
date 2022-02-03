import request from 'request';
import DatabaseInserter from './database_inserter.js';
import config from './config.js';

export default class LikePromiseProducer {
    produce(venues) {
        const venueIds = venues.map(item => item.venue.id)
        const promises = this.getLikePromises(venueIds)
        return promises
    }

    getLikePromises(venueIds) {
        return venueIds.map(venueId => {
            return new Promise((resolve, reject) => {
                request(
                    this.getRequestParametersForVenueLike(venueId),
                    (err, res, body) => {
                        if(err) {
                            reject(res)
                        } else {
                            const venue = this.getVenue(body);
                            new DatabaseInserter().insert(venue)
                            resolve(this.getVenueNameLikePair(venue))
                        }
                    }
                )
            })
        })
    }

    getRequestParametersForVenueLike(venueId) {
        return {
            url:`https://api.foursquare.com/v2/venues/${venueId}`,
            method: 'GET',
            qs: {
              client_id: config.fs.clientId,
              client_secret: config.fs.clientSecret,
              v: config.fs.version,
            }
          }
    }

    getVenue(responseBody) {
        return JSON.parse(responseBody).response.venue;
    }

    getVenueNameLikePair(venue) {
        return {
            name: venue.name,
            like: venue.likes.count
        }
    }

}