







const http = require('http'),
      server = http.createSever();




server.on('request', (Request,Response) =>{
    Response.writeHead(200,{'content-type':'text/plain'});
    Response.write('Hello World');
    Response.end();
});




server.listen(3000,()=>{
    console.log('Node server created at port 3000');
});