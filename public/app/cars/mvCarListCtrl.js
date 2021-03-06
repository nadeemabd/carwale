angular.module('app').controller('mvCarListCtrl', function($scope, mvCachedCars) {
  $scope.cars = mvCachedCars.query();

  $scope.sortOptions = [{value:"name",text: "Sort by Name"},
    {value: "type",text: "Sort by Type"}];
  $scope.sortOrder = $scope.sortOptions[0].value;
});