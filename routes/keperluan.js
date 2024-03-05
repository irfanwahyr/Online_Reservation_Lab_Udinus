const express = require('express');
const keperController = require('../controllers/keperluan.controller');
const router = express.Router();

router.get('/', keperController.index);
router.get('/:id', keperController.show_by_id);

module.exports = router;