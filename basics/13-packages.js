// npm - global command that comes pre installed with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - stores important info about project/package, stores dependency information
// manual approach (create package.json in the root, create properties)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// package-lock.json
// some dependencies have dependencies on their own, have those dependencies have versions as well
// package-lock.json contains all the information/versions about the packages each dependency depends on
// example: bootstrap requires jquery so that dependency tree/info is stored there

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const flatItems = _.flattenDeep(items);
console.log(flatItems);
