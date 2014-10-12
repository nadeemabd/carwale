angular.module('app').controller('mvCarDetailCtrl', ['$scope', 'mvCar', '$routeParams', function($scope, mvCar, $routeParams) {
		$scope.car = mvCar.get({_id: $routeParams.id});
	}
]);