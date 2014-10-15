var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		db: 'mongodb://localhost/carwale',
		rootPath: rootPath,
		port: process.env.PORT || 3000
	},
	production: {
		db: 'mongodb://nadeemabd:gundu28@ds035270.mongolab.com:35270/carwale',
		rootPath: rootPath,
		port: process.env.PORT || 80
	}
};