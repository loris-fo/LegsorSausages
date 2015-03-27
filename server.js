var express = require('express');
var server = express();
var path = require('path');
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/images';

server.set('port', (process.env.PORT || 3000))

server.use(express.static(__dirname + '/public'));
server.use('/bower_components', express.static(__dirname + '/bower_components'));

  server.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/views/index.html'));
  });


server.get('/images', function(req, res) {

    var results = [];

    pg.connect(connectionString, function(err, client, done) {
        var query = client.query("SELECT * FROM items ORDER BY id ASC;");
        query.on('row', function(row) {
            results.push(row);
        });

        query.on('end', function() {
            client.end();
            return res.json(results);
        });

        // Handle Errors
        if(err) {
          console.log(err);
        }
         });
    });

  server.listen(server.get('port'), function() {
    console.log("Node app is running at localhost:" + server.get('port'))
  })

