const express = require('express');
const path = require('path')
const logger = require('morgan');
const multer = require('multer');
const router = express.Router();
const upload = multer({dest: './public/uploads'})


const app = express();

const port = 5001;

// Build-in middleware
app.use(express.json());
app.use(express.urlencoded({extended: true})); // Parse URL-encoded bodies
app.use("/static",express.static(path.join(__dirname, 'public')));

// Application-level middleware
const loggerMiddleware = (req, resp, next) => {
    console.log(`${new Date()} --- Request ${req.method} ${req.url}`)
    next();
}

app.use('/api/users', router);

const fakeAuth = (req, resp, next) => {
    const authStatus = true;
    if(authStatus) {
        console.log('User authstatus : ', authStatus);
        next();
    } else {
        resp.status(401)
        throw new Error('User not authenticated');
    }
}

app.use(loggerMiddleware);

// Third-party middleware.
app.use(logger('dev'));

// Router-level middleware
const getUsers = (req, resp) => {
    resp.json({message: "Get all users"});
}

const createUser = (req, resp) => {
    console.log('Creating new User : ', req.body);
    resp.json({message: 'Create new user'});
}


router.use(fakeAuth);
router.route('/').get(getUsers).post(createUser);

// Error-handling middleware
const errorHandling = (err, req, resp, next) => {
    const statusCode = resp.statusCode || 500;
    resp.status(statusCode);
    switch(statusCode) {
        case 401:
            resp.json({
                title: "Unauthorized",
                message: err.message
            });
            break;
        case 404:
            resp.json({
                title: "not found",
                message: err.message
            });
            break;
        case 501:
            resp.json({
                title: "Server Error",
                message: err.message
            })
            break;
        default:
            break;
    }
}

app.post('/upload', upload.single('image'), (req, resp, next) => {
    console.log(req.file, req.body);
    resp.send(req.file);
}, (err, req, resp, next) => {
    resp.status(400).send({err: err.message});
})

app.use((req, resp, next) => {
    const err = new Error("Route not found");
    resp.status(404);
    next(err);
})

app.use(errorHandling);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})