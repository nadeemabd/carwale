angular.module('app').controller('mvCarListCtrl', ['$scope', 'mvCar',
	function($scope, mvCar) {
		$scope.cars = mvCar.query();

		$scope.sortOptions = [{
			value: "title",
			text: "Sort by title"
		}, {
			value: "published",
			text: "Sort by published"
		}];

		$scope.sortOrder = $scope.sortOptions[0].value;
	}
]);