const express = require('express');
const acarakampusController = require('../controllers/acara_kampus.controller');
const fileUploader = require('../helpers/file-uploader')
const checkMiddleware = require('../middleware/check_auth');
const router = express.Router();


router.post(
    '/create',
    checkMiddleware.checkAuth,
    fileUploader.multiUpload,
    acarakampusController.create
    );

router.get('/:id', acarakampusController.show_by_id);
router.get('/', acarakampusController.index);

module.exports = router;