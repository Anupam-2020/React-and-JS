const requestBodyParser = require('../util/body-parser');
const writeToFile = require('../util/write-to-file');

async function putReqHandler(req, resp) {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf('/') + 1);
    let movieId = req.url.split('/')[3];
    let validMovieId = req.movies.findIndex(movie => movie.id === parseInt(movieId));
    if(baseUrl === '/api/movies/' && validMovieId !== -1) {
        let body = await requestBodyParser(req);
        delete body.id;
        console.log(body);
        req.movies[validMovieId] = {id: parseInt(movieId), ...body};
        resp.writeHead(201, {'Content-Type': 'application/json'});
        writeToFile(req.movies);
        resp.write(JSON.stringify(req.movies[validMovieId]));
        resp.end();
    } else {
        resp.writeHead(404, {'Content-Type': 'application/json'});
        resp.write(JSON.stringify({ message: 'Movie Not Found', title: 'Not Found' }));
        resp.end();
    }
}

module.exports = putReqHandler;
