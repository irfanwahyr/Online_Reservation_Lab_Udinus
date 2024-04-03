const express = require('express');
const jadwalController = require('../controllers/jadwal.controller');
const router = express.Router();
const checkMiddleware = require('../middleware/check_auth');

router.get('/:lab/:hari', jadwalController.show_by_lab_hari);

router.post('/create', checkMiddleware.checkAuth, jadwalController.create);
router.post('/update/:id', checkMiddleware.checkAuth, jadwalController.update);


module.exports = router;