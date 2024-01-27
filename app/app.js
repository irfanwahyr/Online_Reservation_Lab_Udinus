const express = require('express');
const app = express();
const postRoute = require('../routes/posts');

app.use('/post', postRoute);

module.exports = app;