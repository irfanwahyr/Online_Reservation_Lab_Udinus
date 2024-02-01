const express = require('express');
const jadwalController = require('../controllers/jadwal.controller');
const router = express.Router();
const checkMiddleware = require('../middleware/check_auth');

router.get('/', jadwalController.index);
router.get('/:id', jadwalController.show_by_id);

router.post('/create', checkMiddleware.checkAuth, jadwalController.create);
router.post('/update/:id', checkMiddleware.checkAuth, jadwalController.update);
router.post('/delete/:id', checkMiddleware.checkAuth, jadwalController.destroy);


module.exports = router;