const http = require("http");
// webservers keep on listening to requests! therefore, if you run this file via node, execution will not stop...
// YOU CAN ONLY SEND ONE RESPONSE PER REQUEST

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("You just accessed the about section! gigachad");
    return;
  }
  res.end(`<h1>Wrong resource bub!</h1>
  <p>Bing chilling!</p>
  <a href="/">Go back home bubz</a>`);
});

server.listen(5000);
