const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.user_get_all);
router.patch('/:id', usersController.user_patch);
router.delete('/:id', usersController.user_delete);

module.exports = router;