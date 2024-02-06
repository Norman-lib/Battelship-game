// src/controllers/gameController.js
const {Game} = require('../models/game'); // Assuming you've created these models
const {Player} = require('../models/player');

exports.createPlayer = async (req, res) => {
  try {
    const player = new Player(); // Create a new game
    // Add additional game initialization logic here
    const { username } = req.body;
    player.username= username;
    await player.save();
    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

