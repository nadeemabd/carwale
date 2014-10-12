angular.module('app').factory('mvCachedCars', function(mvCar, $window) {
  var carList;

  return {
    query: function() {
      if(!carList) {
        carList = mvCar.query();
      }

      return carList;
    }
  };
});