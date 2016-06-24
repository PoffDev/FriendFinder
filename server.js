var express = require('express')
var app = express();
var PORT = 8080

app.use(express.static('../app/public'))

app.listen(PORT, function(){

	console.log('Server Listening on %d', PORT)
});