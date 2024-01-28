const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();
router.get('/', userController.index);
router.post('/register', userController.create);
router.get('/:id', userController.show_by_id);
router.post('/update/:id', userController.update);
router.post('/delete/:id', userController.destroy);


module.exports = router;