const express = require('express');
const acaraorganisasiController = require('../controllers/acara_organisasi.controller');
const fileUploader = require('../helpers/file-uploader')
const checkMiddleware = require('../middleware/check_auth');
const router = express.Router();


router.post(
    '/create',
    checkMiddleware.checkAuth,
    fileUploader.upload1.single('proposal_acara'),
    fileUploader.upload2.single('surat_peminjaman'),
    acaraorganisasiController.create
    );

module.exports = router;