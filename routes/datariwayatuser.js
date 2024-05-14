const express = require('express');
const riwayat_pesanan = require('../controllers/riwayat_pesanan.controller');
const router = express.Router();
const checkMiddleware = require('../middleware/check_auth');

router.post('/create', checkMiddleware.checkAuth, riwayat_pesanan.create);
router.get('/:id', riwayat_pesanan.show_by_id);
router.post('/update/:id', riwayat_pesanan.update);
router.get('/', riwayat_pesanan.index);

module.exports = router;