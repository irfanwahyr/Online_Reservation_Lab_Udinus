const express = require('express');
const sw_primerController = require('../controllers/sw_primer.controller');
const router = express.Router();
const checkMiddleware = require('../middleware/check_auth');

router.get('/', sw_primerController.index);
router.get('/:id', sw_primerController.show_by_id);

router.post('/create', checkMiddleware.checkAuth, sw_primerController.create);
router.post('/update/:id', checkMiddleware.checkAuth, sw_primerController.update);
router.post('/delete/:id', checkMiddleware.checkAuth, sw_primerController.destroy);


module.exports = router;