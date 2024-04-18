const express = require('express');
const softwareController = require('../controllers/software.controller');
const router = express.Router();
const checkMiddleware = require('../middleware/check_auth');

router.get('/', softwareController.index);
router.get('/:id', softwareController.show_by_id);

router.post('/create', checkMiddleware.checkAuth, softwareController.create);
router.post('/update/:id', checkMiddleware.checkAuth, softwareController.update);


module.exports = router;