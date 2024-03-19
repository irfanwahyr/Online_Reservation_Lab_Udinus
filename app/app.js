const express = require('express');
const app = express();
const cache = require('express-cache-headers');

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
const kelasPengganti = require('../routes/kelaspengganti')

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

app.use('/users', cache(3600), userRoute);
app.use('/labs',cache(3600), labRoute);
app.use('/software', cache(3600), softwareRoute);
app.use('/hardware', cache(3600), hardwareRoute);
app.use('/days', cache(3600), hariRoute);
app.use('/jadwals', cache(3600), jadwalRoute);
app.use('/pesans', cache(3600), pesanRoute);
app.use('/keperluans', cache(3600), keperRoute);
app.use('/peminjamans', cache(3600), peminRoute);
app.use('/files', cache(3600), fileRoute);
app.use('/kelasPengganti', cache(3600), kelasPengganti);

module.exports = app;