var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/images';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL, image TEXT, sausage BOOLEAN)');
query.on('end', function() { client.end(); });