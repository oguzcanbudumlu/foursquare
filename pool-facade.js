const { Pool } = require("pg");

class PoolFacade  {
    static create() {
        const config = require('./database-config.json');
        const pool = new Pool(config);
        return new PoolFacade(pool);
    }

    constructor(pool) {
        this.pool = pool;
    }

    addVenue(venue) {
        const query = `
        insert into test0(venue_id, name, category, address, likes, geom) VALUES ($1,$2,$3,$4,$5,st_setsrid(st_makepoint($6,$7), 4326));
        `

        this.pool.query(query, Object.values(venue), (err, result) => {
            if(err) {
                return console.error('Error in addVenue method with parameter', venue, 'executing  query: ', err.detail);
            }
            console.log("no any error");
        });
    }
}

module.exports = PoolFacade;
