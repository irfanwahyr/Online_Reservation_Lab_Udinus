const express = require('express');
const kelasPenggantiController = require('../controllers/riwayat_pesanan.controller');
const router = express.Router();
const checkMiddleware = require('../middleware/check_auth');

router.post('/create', checkMiddleware.checkAuth, kelasPenggantiController.create);
router.get('/:id', kelasPenggantiController.show_by_id);

module.exports = router;