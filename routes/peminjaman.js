const express = require('express');
const peminjamController = require('../controllers/peminjam.controller');
const router = express.Router();
const checkMiddleware = require('../middleware/check_auth');

router.get('/', peminjamController.index);
router.get('/:id', peminjamController.show_by_id);

router.post('/create', checkMiddleware.checkAuth, peminjamController.create);


module.exports = router;