const express = require('express');
const kpController = require('../controllers/kelasPgnt.controller');
const router = express.Router();

router.get('/', kpController.index);
router.get('/:id', kpController.show_by_id);

module.exports = router;