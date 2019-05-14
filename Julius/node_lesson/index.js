// Writing web apps with NodeJS

// server.js

const http = require("http"),
  server = http.createServer();

server.on("request", (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Hello World" + " <h1>This is heading 1</h1>");
  response.end();
});

server.listen(3000, () => {
  console.log("Node server created at port 3000");
});
