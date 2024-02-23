const express = require('express');
const hariController = require('../controllers/hari.controller');
const router = express.Router();

router.get('/:id', hariController.show_by_id);

module.exports = router;