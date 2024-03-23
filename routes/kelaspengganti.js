const express = require('express');
const kelasPenggantiController = require('../controllers/kelas_pengganti.controller');
const router = express.Router();
const checkMiddleware = require('../middleware/check_auth');

// router.get('/', kelasPenggantiController.index);
// router.get('/:id', kelasPenggantiController.show_by_id);

router.post('/create', checkMiddleware.checkAuth, kelasPenggantiController.create);


module.exports = router;