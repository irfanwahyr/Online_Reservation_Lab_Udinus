const express = require('express');
const fileController = require('../controllers/file.controller');
const fileUploader = require('../helpers/file-uploader')
const checkMiddleware = require('../middleware/check_auth');
const router = express.Router();


router.post('/uploads', checkMiddleware.checkAuth, fileController.upload);

module.exports = router;