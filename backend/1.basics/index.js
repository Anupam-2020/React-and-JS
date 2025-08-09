// console.log("Node js tutorial");
// process.exit(0); // Using process.exit(0) to indicate success
// process.exit(1); // Using process.exit(1) to indicate an error
// process.exitCode = 1; // Another way to set the exit code.


// const {data: {ford, honda}} = require('./car.js');
// console.log(honda);

const { ford, honda } = require('./car.js');
console.log(ford);
console.log(JSON.stringify(honda, null, 2));
console.log(JSON.stringify({ford, honda}, null, 3));
