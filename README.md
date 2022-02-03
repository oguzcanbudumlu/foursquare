# Foursquare Places


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

## Obtain coordinates in indexed form

The application needs indexed form of coordinates.
In order to obtain it, in `grid_format_converter` folder,

```bash
node main.js
```

Then, `grids_indexed.json` will be generated in the same folder.

## Consume coordinates gradually

Due to daily limitation of Foursquare, all coordinates could not be consumed at the same time to obtain venue likes so indexed coordinates should be consumed gradually (day by day).

For this purpose, there is a parameter named `gridCount` in `config.json` file. According to limitation of Foursquare, it can be updated.

After getting partial coordinates, `grids_indexed.json` will overwritten by deleting the obtained coordinates.

## Run app
```bash
node app.js
```
