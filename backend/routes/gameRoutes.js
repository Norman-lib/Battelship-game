// src/routes/gameRoutes.js
const express = require('express');
const { createGame, joinGame, placeShips, makeMove } = require('../controllers/gameController'); // You'll create this file next


const router = express.Router();

router.post('/create', createGame);
router.post('/join', joinGame);
router.post('/placeShips', placeShips);
router.post('/move', makeMove);

module.exports = router;
