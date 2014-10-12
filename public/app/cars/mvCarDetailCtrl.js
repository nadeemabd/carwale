angular.module('app').controller('mvCarDetailCtrl', function($scope, mvCachedCars, $routeParams, mvAuth) {
  mvCachedCars.query().$promise.then(function(collection) {
    collection.forEach(function(car) {
      if(car._id === $routeParams.id) {
        $scope.car = car;
      }
    });
  });

  var getCar = function() {
  	var updateCarId = {
  		carId: $routeParams.id
  	};

  	mvAuth.getCarDetail(updateCarId).then(function() {
		mvNotifier.notify('Booking Details has been updated');
	}, function(reason) {
		mvNotifier.error(reason);
	});
  };
});