angular.module('app').controller('mvMainCtrl', function($scope, mvCachedCars, $http, $location) {
	$scope.cars = mvCachedCars.query();

	$scope.change = function() {
		if ($scope.searchText === null) {
			return true;
		}
	};
	$scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

});