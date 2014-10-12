angular.module('app').controller('mvMainCtrl', function($scope, mvCar) {
	 $scope.cars = mvCar.query();
});