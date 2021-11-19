# Foursquare Places

* Create a database named foursquare


## Create PostGIS extension in database

You need the PostGIS extension to be able to store spatial data (venue locations) in the database. As you can see from the geom column in the query below, venue locations are represented as points.

```sql
create extension postgis;
```

## Create table in database

```sql
CREATE TABLE venue_likes (
	id serial PRIMARY KEY,
	venue_id VARCHAR ( 64 ) UNIQUE NOT NULL,
	name VARCHAR ( 64 ) NOT NULL,
	category VARCHAR ( 64 ) NOT NULL,
	address VARCHAR ( 64 ),
	likes INTEGER NOT NULL,
	geom geometry(POINT, 4326)
);
```