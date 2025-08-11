const fs = require('fs');
const path = require('path');

module.exports = (data) => {
    try {
        fs.writeFileSync(
            path.join(
                __dirname, 
                '../data/movies.json'), 
                JSON.stringify(data, null, 1), 
                'utf-8'
            )
    } catch(err) {
        console.log('Error writing to file: ', err);
    }
}