const http = require("http");

// callback function runs everytime the server receives an HTTP request

const server = http.createServer((req, res) => {
  console.log("user hit the server");
  res.end("<h1>Hello world</h1>");
});

server.listen(5000);
