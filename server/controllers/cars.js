var Car = require('mongoose').model('Car');

exports.getCars = function(req, res) {
	Car.find({}).exec(function(err, collection) {
		res.send(collection);
	});
};

exports.getCarById = function(req, res) {
	Car.findOne({_id: req.params.id}).exec(function(err, car) {
		res.send(car);
	});
};