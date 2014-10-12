angular.module('app').controller('mvBookingSuccessCtrl', function($scope, mvAuth, mvIdentity, mvCachedCars, mvNotifier, $location, $routeParams) {

	var getCarId = $routeParams.id

	mvCachedCars.query().$promise.then(function(collection) {
		collection.forEach(function(car) {
			if (car._id === getCarId) {
				$scope.car = car;
			}
		});
	});

	$scope.user = mvIdentity.currentUser;

	$scope.successful = 'Booking is successful';

});