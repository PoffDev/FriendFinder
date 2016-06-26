var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


var PORT = 8081;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api.json'}));

require('./app/routing/html-routes.js')(app);
require('./app/routing/api-routes.js')(app);

app.listen(PORT, function(){

	console.log('Server Listening on %d', PORT)
});