var auth = require('./auth');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var users = require('../controllers/users');
var cars = require('../controllers/cars');

module.exports = function(app) {

	app.get('/api/users', auth.requiresRole('admin'), users.getUsers);

	app.post('/api/users', users.createUser);

	app.put('/api/users', users.updateUser);

	app.get('/api/cars', cars.getCars);
  	app.get('/api/cars/:id', cars.getCarById);

	app.get('/partials/*', function(req, res) {
		res.render('../../public/app/' + req.params);
	});

	app.post('/login', auth.authenticate);

	app.post('/logout', function(req, res) {
		req.logout();
		res.end();
	});

	app.all('/api/*', function(req, res) {
		res.send(404);
	});

	app.get('*', function(req, res) {
		res.render("index", {
			bootstrappedUser: req.user
		});
	});
};