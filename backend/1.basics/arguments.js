const minimist = require('minimist');
process.argv.forEach((val, index) => console.log(`${index}: ${val}`));

// in terminal run
// node arguments.js arg1 arg2 arg3
// Output will be:
// 0: /path/to/node
// 1: /path/to/arguments.js
// 2: arg1
// 3: arg2
// 4: arg3


const argNew = minimist(process.argv.slice(2)); // minimist parses the command line arguments to give the output.
// e.g. if you run `node arguments.js --name Anupam`, it will parse the arguments and give you an object with the key `name` and value `Anupam`.
console.log("Argument passed:", argNew.name);
