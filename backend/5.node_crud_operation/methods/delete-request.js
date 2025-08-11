const writeToFile = require("../util/write-to-file");

module.exports = function(req, resp) {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf('/') + 1);
    let movieId = req.url.split('/')[3];
    console.log(movieId);
    let validMovie = req.movies.find(movie => movie.id === parseInt(movieId));
    if(baseUrl === '/api/movies/' && validMovie) {
        // req.movies = req.movies.filter(movie => movie.id !== parseInt(movieId));
        req.movies.splice(req.movies.indexOf(validMovie), 1);
        resp.statusCode = 204; // 204 means No Content
        resp.setHeader('Content-Type', 'application/json');
        writeToFile(req.movies);
        resp.end();
    } else {
        resp.writeHead(404, {'Content-Type': 'application/json'})
        resp.end(JSON.stringify({title: 'Not Found', message: 'Route Not Found from Delete Request'}));
    }
}