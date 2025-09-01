const express = require('express');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, resp) => {
    resp.send('Hello World!');
})

app.get('/users', (req, resp) => {
    resp.json({message: 'Get all users'});
})

app.get('/users/:id', (req, resp) => {
    resp.json({message: `Get user with ID: ${req.params.id}`});
})

app.post('/users', (req, resp) => {
    resp.json({message: 'Create new user'})
})

app.put('/users/:id', (req, resp) => {
    resp.json({message: `Update user with ID: ${req.params.id}`});
})

app.delete('/users/:id', (req, resp) => {
    resp.json({message: `Delete user with ID ${req.params.id}`})
})

app.listen(PORT, () => {
    console.log('Example app listening on port: ', PORT)
})