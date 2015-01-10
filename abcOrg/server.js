var http = require('http'),
express = require('express'),
app = express();
var server = http.createServer(app).listen(8080);
app.use(express.static(__dirname + '/'));