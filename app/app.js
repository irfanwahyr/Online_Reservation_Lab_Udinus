const express = require('express');
const app = express();

const userRoute = require('../routes/users');
const labRoute = require('../routes/labs');
const swprimerRoute = require('../routes/sw_primer')
const swsekunderRoute = require('../routes/sw_sekunder')
const hariRoute = require('../routes/haris')
const jadwalRoute = require('../routes/jadwals')
const pesanRoute = require('../routes/pesans')
const kpRoute = require('../routes/kelas_pgnt')
const keperRoute = require('../routes/keperluan')
const peminRoute = require('../routes/peminjaman')

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
app.use('/sw_primers', swprimerRoute);
app.use('/sw_sekunders', swsekunderRoute);
app.use('/days', hariRoute);
app.use('/jadwals', jadwalRoute);
app.use('/pesans', pesanRoute);
app.use('/kp_pgnt', kpRoute);
app.use('/keperluans', keperRoute);
app.use('/peminjamans', peminRoute);

module.exports = app;