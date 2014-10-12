angular.module('app').factory('mvCar', function($resource) {
  var CarResource = $resource('/api/cars/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray:false}
  });

  return CarResource;
});