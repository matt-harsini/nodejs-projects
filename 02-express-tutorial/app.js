const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./index.html");
// callback function runs everytime the server receives an HTTP request
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write(homePage);
    res.end();
    return;
  }
  if (url === "/about") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.write("<h1>About page</h1>");
    res.end();
    return;
  }
  res.writeHead(404, {
    "content-type": "text/html",
  });
  res.write("<h1>Resource not found</h1>");
  res.end();
  return;
});

server.listen(5000);
