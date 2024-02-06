const express = require('express');
const { createPlayer } = require('../controllers/playerController'); // You'll create this file next


const router = express.Router();

router.post('/create', createPlayer);

module.exports = router;
