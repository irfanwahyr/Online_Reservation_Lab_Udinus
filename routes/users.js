const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();
const checkMiddleware = require('../middleware/check_auth');

router.post('/register', userController.signUp);
router.post('/login', userController.signIn);
router.post('/logout', userController.logout);

router.get('/', userController.index);
router.get('/:id', userController.show_by_id);

router.post('/update/:id', checkMiddleware.checkAuth, userController.update);
router.post('/delete/:id', checkMiddleware.checkAuth, userController.destroy);

module.exports = router;