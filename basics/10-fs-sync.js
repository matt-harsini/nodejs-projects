const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/subfolder/second.txt", "ascii");

// console.log(first, second);
console.log('start');
writeFileSync(
  "./content/subfolder/result.txt",
  "node-js is really cool bing chilling am i rite",
  { flag: "a" }
);
console.log('end');