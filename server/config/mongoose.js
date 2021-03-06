var mongoose = require('mongoose');
var userModel = require('../models/User');
var carModel = require('../models/Car');

module.exports = function(config) {
	mongoose.connect(config.db);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'Error Connection..'));
	db.once('open', function callback() {
		console.log('DB Opened');
	});

	userModel.createDefaultUsers();
	carModel.createDefaultCars();

};