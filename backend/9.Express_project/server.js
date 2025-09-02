const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConnection');
dotenv.config();

const app = express();
const router = require('./routes/contactRoute');
const errorHandler = require('./middleware/errorhandler');

const port = process.env.PORT || 5001;

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api/contacts', router);
app.use(errorHandler);

app.use((req, resp, next) => {
    resp.status(404).send({message: 'Route not found'});
})

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})