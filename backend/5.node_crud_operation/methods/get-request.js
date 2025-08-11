module.exports = (req, resp) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf('/') + 1);
    console.log(baseUrl);
    let id = req.url.split('/')[3];
    if(req.url === '/api/movies') {
        resp.statusCode = 200;
        resp.setHeader('Content-Type', 'application/json');
        resp.write(JSON.stringify(req.movies));
        resp.end();
    } else if(id) {
        let validId = req.movies.findIndex(movie => movie.id === parseInt(id));
        if(validId !== -1) {
            resp.statusCode = 200;
            resp.setHeader('Content-Type', 'application/json');
            resp.write(JSON.stringify(req.movies[validId]));
            resp.end();
        }
        else {
            resp.statusCode = 404;
            resp.setHeader('Content-Type', 'application/json');
            resp.write(JSON.stringify({title: 'Not Found', message: 'Movie not found'}));
            resp.end();
        }
    } else {
        resp.writeHead(404, { 'Content-Type': 'application/json' });
        resp.end(JSON.stringify({title: 'Not Found', message: 'Route not found'}));
    }
}