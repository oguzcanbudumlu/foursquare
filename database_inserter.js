import config from './config.js';
import PG from 'pg';

const Pool = PG.Pool;

  
const pool = new Pool({
    user: config.db.user,
    host: config.db.host,
    database: config.db.database,
    password: config.db.password,
    port: config.db.port
});


export default class DatabaseInserter {
    insert(venue) {
        const name = venue.name
        const likes = venue.likes.count;
        const address = venue.location ? venue.location.address : null;
        const venueId = venue.id
        const category = venue.categories[0].name
        const lon = venue.location ? venue.location.lng : null;
        const lat = venue.location ? venue.location.lat : null; 
        
        
        

        pool.query(
            `
            insert into ${config.db.table}(venue_id, name, category, address, likes, geom)
            select $1, $2, $3, $4, $5, st_setsrid(st_makepoint(${lon},${lat}), 4326)
            where not exists (
              select venue_id from ${config.db.table} where venue_id = $6
            )
            `, [venueId, name, category, address, likes, venueId],
            (err,result) => {
              if(err) {
                console.log(err.message);
              }  else {
                console.log(`success with ${venueId}, ${name}, ${category}, ${category}, ${address}, ${likes}, ${lon}, ${lat}`);
                console.log("result ", result);
              }
            }
          )
    }
}