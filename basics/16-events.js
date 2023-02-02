// event driven programming is used heavily in node.js
// we listen for specific events and register functions that will execute in response to those events
// once an event takes place, callback function fires

const EventEmitter = require("events");
const eventListener = new EventEmitter();

eventListener.on("response", () => {
  console.log(`Data recieved `);
});

eventListener.emit("response");

eventListener.on("test", (x, y) => {
  console.log("testing");
  console.log(`${x}, ${y}`);
});

eventListener.emit("test", "bing", "chilling");
