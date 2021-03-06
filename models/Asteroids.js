var mongoose = require('mongoose');

var AsteroidSchema = new mongoose.Schema({
  earth_moid: Number,
  diameter: Number,
  delta_v: Number,
  absolute_magnitude: Number,
  id: Number
});

var Asteroid = mongoose.model('Asteroid', AsteroidSchema);

module.exports = {
  Asteroid: Asteroid
}
