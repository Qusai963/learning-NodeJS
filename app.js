const http = require('http');

const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('inside first middleware');
    next();
});

app.use((req, res, next) => {
    console.log('inside second middleware');
    res.send('<h1>Hello world!</h1>');
});
const server = http.createServer(app);

server.listen(3000);