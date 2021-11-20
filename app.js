const PoolFacade  = require('./pool-facade.js');

const poolFacade = PoolFacade.create();

poolFacade.addVenue({
    venueId: 'dsadsdasddfs',
    name: 'B',
    category: 'C',
    address: 'D',
    likes: 2,
    lon: 3,
    lat: 5
});