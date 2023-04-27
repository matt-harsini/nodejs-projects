const { readFile, writeFile } = require("fs");
// callback hell
readFile("./content/subfolder/first.txt", "utf-8", function (err, result) {
  if (err) {
    console.log("Something went wrong! " + err.message);
    return;
  }
  const first = result;
  readFile("./content/subfolder/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log("Something went wrong! " + err.message);
      return;
    }
    const second = result;
    writeFile(
      "./content/subfolder/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      function (err, result) {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log(result);
      }
    );
  });
});
