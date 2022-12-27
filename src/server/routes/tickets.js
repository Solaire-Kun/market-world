const express = require('express');
const router = express.Router();
const ticketsController = require('../controllers/ticketsController');

router.post('/', ticketsController.ticket_post);

module.exports = router;