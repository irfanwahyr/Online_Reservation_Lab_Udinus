const express = require('express');
const kelasPenggantiController = require('../controllers/kelas_pengganti.controller');
const router = express.Router();
const checkMiddleware = require('../middleware/check_auth');

router.post('/create', checkMiddleware.checkAuth, kelasPenggantiController.create);
router.get('/', kelasPenggantiController.index);
router.post('/update/:id', checkMiddleware.checkAuth, kelasPenggantiController.update);
router.post('/delete/:id', checkMiddleware.checkAuth, kelasPenggantiController.destroy);
router.get('/:id', kelasPenggantiController.show_by_id);

module.exports = router;