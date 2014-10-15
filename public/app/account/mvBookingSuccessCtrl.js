angular.module('app').controller('mvBookingSuccessCtrl', function($scope, mvAuth, mvIdentity, mvCachedCars, mvNotifier, $location, $routeParams, $route) {

	var getCarId = $routeParams.id

	mvCachedCars.query().$promise.then(function(collection) {
		collection.forEach(function(car) {
			if (car._id === getCarId) {
				$scope.car = car;
			}
		});
	});

	$scope.user = mvIdentity.currentUser;

	$scope.address = mvIdentity.currentUser.bookingOrder.address;
	$scope.city = mvIdentity.currentUser.bookingOrder.city;
	$scope.state = mvIdentity.currentUser.bookingOrder.state;
	$scope.pincode = mvIdentity.currentUser.bookingOrder.pincode;
	$scope.mobileNo = mvIdentity.currentUser.bookingOrder.mobileNo;
	$scope.bankAccountNo= mvIdentity.currentUser.bookingOrder.bankAccountNo;

	$scope.successful = 'Booking is successful';

});