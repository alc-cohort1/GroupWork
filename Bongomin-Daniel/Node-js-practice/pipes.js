
var fs = require('fs');
var http = require('http');


http.createServer(function(req,res){


res.writeHead(200, { 'content-type': 'text/html'});
var readStream = fs.createReadStream('index.html','utf8');
// paersing the response to the UI using pipe
readStream.pipe(res);



}).listen(3000);
console.log('the server is nunning on http//:127.0.0.1:3000/');