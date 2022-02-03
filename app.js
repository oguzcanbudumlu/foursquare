import PromiseConsumer from './promise_consumer.js';
import VenuePromiseProducer from './venue_promise_producer.js';



function main() {
    const lon = 32.811;
    const lat = 39.891;
    const coordinates = [{
        index: 0,
        lon: lon,
        lat: lat
    }]

    const venuesPromises = new VenuePromiseProducer().produce(coordinates)
    new PromiseConsumer().consume(venuesPromises)
}

main();