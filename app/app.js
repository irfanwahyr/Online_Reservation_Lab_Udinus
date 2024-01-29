const express = require('express');
const app = express();
const userRoute = require('../routes/users');
const labRoute = require('../routes/labs');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/users', userRoute);
app.use('/labs', labRoute);

module.exports = app;