// CommonJS, every file is module (by default)
// Modules - Encapsulated code

const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");

sayHi(john);
