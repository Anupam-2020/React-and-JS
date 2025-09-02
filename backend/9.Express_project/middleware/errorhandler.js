const { constants } = require("../constants");

const { VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED, FORBIDDEN } = constants;
const errorHandler = (err, req, resp, next) => {
    const statusCode = resp.statusCode || 500;
    switch(statusCode) {
        case VALIDATION_ERROR:
            resp.json({
                title: 'Validation Error',
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case NOT_FOUND:
            resp.json({
                title: 'Not Found',
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case UNAUTHORIZED:
            resp.json({
                title: 'Unauthorized',
                message: err.message,
                stackTrace: err.stack
            })
            break;
        case FORBIDDEN:
            resp.json({
                title: 'Forbidden',
                message: err.message,
                stackTrace: err.stack
            })
            break;
        default:
            resp.json({
                title: 'Internal Server Error',
                message: err.message,
                stackTrace: err.stack
            })
            break;
    }
}


module.exports = errorHandler;