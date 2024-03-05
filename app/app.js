const express = require('express');
const app = express();

const userRoute = require('../routes/users');
const labRoute = require('../routes/labs');
const softwareRoute = require('../routes/software')
const hardwareRoute = require('../routes/hardware')
const hariRoute = require('../routes/haris')
const jadwalRoute = require('../routes/jadwals')
const pesanRoute = require('../routes/pesans')
const keperRoute = require('../routes/keperluan')
const peminRoute = require('../routes/peminjaman')
const fileRoute = require('../routes/file')

const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
    origin: process.env.ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use('/users', userRoute);
app.use('/labs', labRoute);
app.use('/software', softwareRoute);
app.use('/hardware', hardwareRoute);
app.use('/days', hariRoute);
app.use('/jadwals', jadwalRoute);
app.use('/pesans', pesanRoute);
app.use('/keperluans', keperRoute);
app.use('/peminjamans', peminRoute);
app.use('/files', fileRoute);

module.exports = app;