angular.module('app').controller('mvOrdersCtrl', function($scope, mvAuth, mvIdentity, mvCachedCars, $location, $routeParams) {

	var carsArray = mvIdentity.currentUser.bookingOrder.bookings;
	$scope.carOrders = [];
	$scope.orders = carsArray;

	mvCachedCars.query().$promise.then(function(collection) {
		collection.forEach(function(car) {
			for (var i = 0; i < carsArray.length; i++) {
				if (carsArray[i] === car._id) {
					$scope.carOrders = $scope.carOrders.concat(car);
				}
			}
		});
	});


	$scope.user = mvIdentity.currentUser;

	$scope.successful = 'Booking is successful';

});