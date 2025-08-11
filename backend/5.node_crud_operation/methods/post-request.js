const fs = require('fs');
const requestBodyParser = require('../util/body-parser');
const writeToFile = require('../util/write-to-file');

async function postRequestHandler(request, response) {
    if(request.url === '/api/movies') {
        try {
            let body = await requestBodyParser(request);
            body.id = request.movies.length + 1;
            request.movies.push(body);
            response.writeHead(201, {'Content-Type': 'application/json'});
            writeToFile(request.movies);
            response.end();
            console.log('Request Body: ', body);
        } catch(err) {
            console.log('Error parsing request body: ', err);
            response.writeHead(400, {'Content-Type': 'application/json'});
            response.end(JSON.stringify({message: 'Request body is not valid', title: err.message}))
        }
    } else {
        response.writeHead(404, {'Content-Type': 'application/json'});
        response.end(JSON.stringify({message: 'Route Not Found from Post Request', title: 'Not Found'}));
    }
}

module.exports = postRequestHandler;
