const express = require('express');
const sw_sekunderController = require('../controllers/sw_sekunder.controller');
const router = express.Router();
const checkMiddleware = require('../middleware/check_auth');

router.get('/', sw_sekunderController.index);
router.get('/:id', sw_sekunderController.show_by_id);

router.post('/create', checkMiddleware.checkAuth, sw_sekunderController.create);
router.post('/update/:id', checkMiddleware.checkAuth, sw_sekunderController.update);
router.post('/delete/:id', checkMiddleware.checkAuth, sw_sekunderController.destroy);

module.exports = router;