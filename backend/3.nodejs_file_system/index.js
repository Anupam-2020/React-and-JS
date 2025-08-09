const filePath = __dirname;
console.log(filePath);
const sampleFile = 'sample.txt';
console.log(path.basename(filePath));
console.log(path.join(path.dirname(filePath), sampleFile));