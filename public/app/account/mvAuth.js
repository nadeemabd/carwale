angular.module('app').factory('mvAuth', ['$http', 'mvIdentity', '$q', 'mvUser', '$location', function($http, mvIdentity, $q, mvUser, $location) {
	return {
		authenticateUser: function(username, password) {
			var dfd = $q.defer();
			$http.post('/login', {
				username: username,
				password: password
			}).then(function(response) {
				if (response.data.success) {
					var user = new mvUser();
					angular.extend(user, response.data.user);
					mvIdentity.currentUser = user;
					if ($location.path() === '/signup') {
						$location.path('/');
					}
					dfd.resolve(true);
				} else {
					dfd.resolve(false);
				}
			});
			return dfd.promise;
		},
		createUser: function(newUserData) {
			var newUser = new mvUser(newUserData);
			var dfd = $q.defer();

			newUser.$save().then(function() {
				mvIdentity.currentUser = newUser;
				dfd.resolve();
			}, function(response) {
				dfd.reject(response.data.reason);
			}
			);
			return dfd.promise;
		},
		updateCurrentUser: function(newUserData) {
			var dfd = $q.defer();

			var clone = angular.copy(mvIdentity.currentUser);
			angular.extend(clone, newUserData);
			clone.$update().then(function() {
				mvIdentity.currentUser = clone;
				dfd.resolve();
			}, function(response) {
				dfd.reject(response.data.reason);
			});
			return dfd.promise;
		},
		updateBookingDetails: function(bookUserData) {
			var dfd = $q.defer();

			var clone = angular.copy(mvIdentity.currentUser);
			angular.extend(clone, bookUserData);
			clone.$update().then(function() {
				mvIdentity.currentUser = clone;
				dfd.resolve();
			}, function(response) {
				dfd.reject(response.data.reason);
			});
			return dfd.promise;
		},
		logoutUser: function() {
			var dfd = $q.defer();
			$http.post('/logout', {logout: true}).then(function() {
				mvIdentity.currentUser = undefined;
				dfd.resolve();
			});
			return dfd.promise;
		},
		authorizeCurrentUserForRoute: function(role) {
			if (mvIdentity.isAuthorized(role)) {
				return true;
			} else {
				return $q.reject('not authorized');
			}
		},
		authorizeAuthenticatedUserForRoute: function() {
			if(mvIdentity.isAuthenticated()) {
				return true;
			} else {
				return $q.reject('not authorized');
			}
		},
		authorizeAuthenticatedUserForSignup: function() {
			if(!mvIdentity.isAuthenticated()) {
				return true;
			} else {
				return $q.reject('not authorized');
			}
		},
		bookingAuthorization: function() {
			if(!mvIdentity.isAuthenticated()) {
				return $location.path('/signup');
			}
		}
	};
}]);