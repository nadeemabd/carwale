angular.module('app').controller('mvBookingDetailCtrl', function($scope, mvAuth, mvIdentity, mvNotifier, $location, $routeParams, $window, $route, mvCachedCars) {
	var getCarId = $routeParams.id;
	carUrl = '/cars/' + getCarId + '/booking';
	carIdIndex = mvIdentity.currentUser.bookingOrder.bookings.indexOf($routeParams.id);
	$scope.bookings = mvIdentity.currentUser.bookingOrder.bookings;

	mvCachedCars.query().$promise.then(function(collection) {
		collection.forEach(function(car) {
			if (car._id === getCarId) {
				$scope.car = car;
			}
		});
	});

	/*if (carIdIndex > -1) {
		$location.path('/booking-profile');
	}*/

	$scope.address = mvIdentity.currentUser.bookingOrder.address;
	$scope.city = mvIdentity.currentUser.bookingOrder.city;
	$scope.state = mvIdentity.currentUser.bookingOrder.state;
	$scope.pincode = mvIdentity.currentUser.bookingOrder.pincode;
	$scope.mobileNo = mvIdentity.currentUser.bookingOrder.mobileNo;
	$scope.bankAccountNo = mvIdentity.currentUser.bookingOrder.bankAccountNo;


	$scope.book = function() {
		var newBookingData = {
			address: $scope.address,
			city: $scope.city,
			state: $scope.state,
			pincode: $scope.pincode,
			mobileNo: $scope.mobileNo,
			bankAccountNo: $scope.bankAccountNo,
			bookings: $scope.bookings.concat(getCarId)
		};

		mvAuth.updateBookingDetails(newBookingData).then(function() {
			mvNotifier.notify('Booking Details has been updated');
			$location.path('/cars/' + getCarId + '/booking-success');
		}, function(reason) {
			mvNotifier.error(reason);
		});
	};

});