angular.module('app').controller('mvMainCtrl', function($scope, mvCachedCars, $http) {
	$scope.cars = mvCachedCars.query();

	$scope.change = function() {
		if ($scope.searchText === null) {
			return true;
		}
	};
});