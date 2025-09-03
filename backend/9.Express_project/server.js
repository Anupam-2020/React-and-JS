const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConnection');
dotenv.config();

const app = express();
const contactRouter = require('./routes/contactRoute');
const userRouter = require('./routes/userRoutes');
const errorHandler = require('./middleware/errorhandler');

const port = process.env.PORT || 5001;

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api/contacts', contactRouter);
app.use('/api/users', userRouter)
app.use(errorHandler);

app.use((req, resp, next) => {
    resp.status(404).send({message: 'Route not found'});
})

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
})