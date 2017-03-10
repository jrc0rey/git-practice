var mongoose = require('mongoose');

var CivilianSchema = new mongoose.Schema({
	name: String,
	movie: String,
	power: String,
	height: Number
});

module.exports = mongoose.model('Civilian', CivilianSchema);