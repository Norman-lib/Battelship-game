const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  gamesPlayed: { type: Number, default: 0 },
  gamesWon: { type: Number, default: 0 }
});
const Player = mongoose.model('Player', playerSchema);
exports.Player = Player;
