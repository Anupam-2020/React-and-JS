const path = require('path');
const filePath = __dirname;
const sampleFile = 'sample.txt';
const fullPath = path.join(filePath, sampleFile);


const fs = require('fs');
const fsPromise = require('fs/promises');

// asynchronous way to read a file
fs.readFile(fullPath, 'utf8', (err, data) => {
    if(err) {
        throw new Error("Something went wrong!");
    }
    console.log(data);
})


// Synchronous way to read a file
try {
    const data = fs.readFileSync(path.join(__dirname, 'sample.txt'), 'utf-8');
    console.log(data);
} catch(err) {
    throw new Error("Something went wrong!");
}

// Using promises to read a file
const fileReading = async() => {
    try {
        const data = await fsPromise.readFile(fullPath, {encoding: 'utf8'});
        console.log(data);
    } catch(err) {
        throw new Error("Something went wrong!");
    }
}

fileReading();