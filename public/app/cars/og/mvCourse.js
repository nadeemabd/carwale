angular.module('app').factory('mvCar', ['$resource', function($resource){
	var CarResource = $resource('api/cars/:id', {_id: "@id"}, {
		update: {method: 'PUT', isArray: false}
	});

	return CarResource;
}]);