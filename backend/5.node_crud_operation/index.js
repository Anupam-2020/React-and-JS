const http = require('http');
require('dotenv').config();
const getReqHandler = require('./methods/get-request');
const postReqHandler = require('./methods/post-request');
const deleteReqHandler = require('./methods/delete-request');
const putReqHandler = require('./methods/put-request');
let movies = require('./data/movies.json');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, resp) => {
    req.movies = movies; // Attach movies data to the request
    
    switch(req.method) {
        case 'GET':
            getReqHandler(req, resp);
            break;
        case 'POST':
            postReqHandler(req, resp);
            break;
        case 'PUT':
            putReqHandler(req, resp);
            break;
        case 'DELETE':
            deleteReqHandler(req, resp);
            break;
        default:
            resp.statusCode = 404;
            resp.setHeader('Content-Type', 'application/json');
            resp.write(JSON.stringify({ message: 'Route Not Found from Index', title: 'Not Found' }));
            resp.end();
    }
});

server.listen(PORT, () => {
    console.log('Server is running on Port', PORT)
})