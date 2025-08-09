const fs = require('fs');
const path = require('path');
const fsPromises = require('fs/promises');

const txtFile = path.join(__dirname, 'text.txt');
const content = 'Hello, this is a test file created using Node.js!';

// Write content to the file
fs.writeFile(txtFile, content, (err) => {
    if(err) {
        console.log('Error writing file:', err);
    } else {
        console.log('File written successfully!');
        fs.readFile(txtFile, 'utf-8', (err, data) => {
            if(err) {
                console.log('Error reading file:', err);
            } else {
                console.log('File content:', data);
            }
        })
    }
})


const writingInFile = async() => {
    const content = 'This is a new line added to the file.';
    const nextContent = 'This is another line added to the file.';
    const sampleFile = path.join(__dirname, 'sampleFile.txt');
    try {
        await fsPromises.writeFile(sampleFile, content);
        await fsPromises.appendFile(sampleFile, '\n' + nextContent);
        await fsPromises.rename(sampleFile, path.join(__dirname, 'files', 'renamedFile.txt'));
        const data = await fsPromises.readFile(sampleFile, 'utf-8');
        console.log('File content after writing:', data);
    } catch(err) {
        console.log('Error writing or reading file:', err);
    }
}

writingInFile();