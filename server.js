var express = require('express'),
  app = express(),
  port = 8000;
  bodyParser = require('body-parser');
  sqlite3 = require('sqlite3').verbose();
  dbutils = require('./api/utils/dbutils');

  app.on('listening', function () {
    dbutils.createDb();
  });
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  var routes = require('./api/routes/routes');
  routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
