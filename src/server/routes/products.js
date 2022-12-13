const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.product_get_all);
router.post('/', productsController.product_post);
router.patch('/:id', productsController.product_patch);
router.delete('/:id', productsController.product_delete);

module.exports = router;