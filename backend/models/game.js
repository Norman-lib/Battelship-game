const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
    status: { type: String, enum: ['waiting', 'in_progress', 'finished'], default: 'waiting' },
    winner: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', default: null },
    playersShips: [{ type: Map, of: String }],
    gameCreator: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
    boardStates: [{ type: Map, of: String }] // Could be an array of maps, representing each player's board
});

const Game = mongoose.model('Game', gameSchema);
exports.Game = Game;

