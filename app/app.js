const express = require('express');
const app = express();
const userRoute = require('../routes/users');
const labRoute = require('../routes/labs');
const swprimerRoute = require('../routes/sw_primer')
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/users', userRoute);
app.use('/labs', labRoute);
app.use('/sw_primers', labRoute);

module.exports = app;