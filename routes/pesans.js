const express = require('express');
const pesanController = require('../controllers/pesan.controller');
const router = express.Router();
const checkMiddleware = require('../middleware/check_auth');

router.get('/', pesanController.index);
router.get('/:id', pesanController.show_by_id);

router.post('/create', checkMiddleware.checkAuth, pesanController.create);
router.post('/update/:id', checkMiddleware.checkAuth, pesanController.update);
router.post('/delete/:id', checkMiddleware.checkAuth, pesanController.destroy);


module.exports = router;