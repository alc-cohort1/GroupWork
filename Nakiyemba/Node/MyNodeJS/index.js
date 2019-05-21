//writing web apps with NodeJs
    //server.js

// http is already included in the library on installing NodeJs
const http = require ("http"),
      server = http.createServer();

//creating an event in this case, on submit is the event
server.on('request', (request, response)=>{
    response.writeHead(200,{'Content-Type':'text html'});
    response.write('<h1><b>Hello world<b/></h1>'); 
    response.end();
});


server.listen(3000,()=>{
  console.log('Node server created at port 3000');
});

