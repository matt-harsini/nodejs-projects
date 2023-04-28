const { createReadStream } = require("fs");

const stream = createReadStream("./basics/content/big.txt");

console.log(stream);

stream.on("data", (result) => {
  console.log(result);
});
