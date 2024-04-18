const express = require('express');
const hardwareController = require('../controllers/hardware.controller');
const router = express.Router();
const checkMiddleware = require('../middleware/check_auth');

router.get('/', hardwareController.index);
router.get('/:id', hardwareController.show_by_id);

router.post('/create', checkMiddleware.checkAuth, hardwareController.create);
router.post('/update/:id', checkMiddleware.checkAuth, hardwareController.update);

module.exports = router;