const express = require('express');
const acaraorganisasiController = require('../controllers/acara_organisasi.controller');
const fileUploader = require('../helpers/file-uploader')
const checkMiddleware = require('../middleware/check_auth');
const router = express.Router();


router.post(
    '/create',
    checkMiddleware.checkAuth,
    fileUploader.multiUpload,
    acaraorganisasiController.create
    );

router.get('/:id', acaraorganisasiController.show_by_id);
router.post('/delete/:id', checkMiddleware.checkAuth, acaraorganisasiController.destroy);
router.get('/', acaraorganisasiController.index);

module.exports = router;