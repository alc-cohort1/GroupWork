// this server returns an html page to the prowser


var http = require('http'),
    host = '127.0.0.1',
    port = '9000';
var fs = require('fs');


http.createServer(function(req,res){
res.writeHead(200,{'content-type':'text/html'})
var readStream = fs.createReadStream('index.html','utf8');
readStream.pipe(res);

}).listen(port, host, function () {
    console.log('the server is running on http//:' + host + ':' + port);

})
