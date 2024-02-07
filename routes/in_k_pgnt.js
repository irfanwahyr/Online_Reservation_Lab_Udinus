const express = require('express');
const kpcontroller = require('../controllers/in_k_pgnt.controller');
const router = express.Router();
const checkMiddleware = require('../middleware/check_auth');

router.get('/', kpcontroller.index);
router.get('/:id', kpcontroller.show_by_id);

router.post('/create', checkMiddleware.checkAuth, kpcontroller.create);
router.post('/update/:id', checkMiddleware.checkAuth, kpcontroller.update);
router.post('/delete/:id', checkMiddleware.checkAuth, kpcontroller.destroy);


module.exports = router;