const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

async function start() {
  try {
    const first = await readFile(
      "./basics/content/subfolder/first.txt",
      "utf-8"
    );
    const second = await readFile(
      "./basics/content/subfolder/second.txt",
      "utf-8"
    );
    await writeFile(
      "./basics/content/subfolder/result-mind-grenade.txt",
      `This is awesome!!!`
    );
    console.log(first, second);
  } catch (err) {
    console.log("Error occured");
    console.log(err.message);
  }
}

start();

// function getText(path) {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// experiments
// console.log("Prmoise start");
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Hello from inside of the promise");

//   // Web API
//   setTimeout(() => console.log("From Web API"), 0);

//   resolve("Resolved");
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
// console.log("Promise end");

// const x = fetch("https://dummyjson.com/products/1");
// console.log(x);
// x.then((res) => console.log(res));
