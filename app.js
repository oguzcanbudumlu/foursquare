import PromiseConsumer from './promise_consumer.js';
import VenuePromiseProducer from './venue_promise_producer.js';

import GridSplitter from './grid_splitter.js';
import GridOverwriter from './grid_overwriter.js';

function main() {
    const splitGrids = new GridSplitter().split();
    const venuesPromises = new VenuePromiseProducer().produce(splitGrids)
    new PromiseConsumer().consume(venuesPromises)
    new GridOverwriter().overwrite()
}


main();