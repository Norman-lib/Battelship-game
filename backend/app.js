const express = require('express');
const mongoose = require('mongoose');
const gameRoutes = require('./routes/gameRoutes'); 
const playerRoutes = require('./routes/playerRoutes'); 
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Corrected way to access PORT

mongoose.connect(`mmmongodb+srv://Hamza_m:${process.env.PW}@battelship.bwzrdlo.mongodb.net/`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB!'));

app.use(express.json()); // Middleware to parse JSON bodies

// Use the game routes
app.use('/game', gameRoutes);
app.use('/player', playerRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
