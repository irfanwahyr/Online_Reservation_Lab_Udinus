const express = require('express');
const labController = require('../controllers/lab.controller');
const router = express.Router();
const checkMiddleware = require('../middleware/check_auth');

router.get('/', labController.index);
router.get('/:id', labController.show_by_id);

router.post('/create', checkMiddleware.checkAuth, labController.create);
router.post('/update/:id', checkMiddleware.checkAuth, labController.update);
router.post('/delete/:id', checkMiddleware.checkAuth, labController.destroy);

module.exports = router;