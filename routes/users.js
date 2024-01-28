const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();
router.get('/', userController.index);
router.post('/create', userController.save);
router.get('/:id', userController.show);
router.post('/update/:id', userController.update);
router.post('/delete/:id', userController.destroy);


module.exports = router;