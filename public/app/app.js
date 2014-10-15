angular.module('app', ['ngResource', 'ngRoute', 'ui.bootstrap']);

angular.module('app').config(function($routeProvider, $locationProvider) {
	var routeRoleChecks = {
		admin: {
			auth: function(mvAuth) {
				return mvAuth.authorizeCurrentUserForRoute('admin');
			}
		},
		user: {
			auth: function(mvAuth) {
				return mvAuth.authorizeAuthenticatedUserForRoute();
			}
		},
		signupUser: {
			auth: function(mvAuth) {
				return mvAuth.authorizeAuthenticatedUserForSignup();
			}
		},
		bookingUser: {
			auth: function(mvAuth) {
				return mvAuth.bookingAuthorization();
			}
		}
	};

	$locationProvider.html5Mode(true);
	$routeProvider
		.when('/', {
			templateUrl: '/partials/main/main',
			controller: 'mvMainCtrl'
		})
		.when('/admin/users', {
			templateUrl: '/partials/admin/user-list',
			controller: 'mvUserListCtrl',
			resolve: routeRoleChecks.admin
		})
		.when('/signup', {
			templateUrl: '/partials/account/signup',
			controller: 'mvSignupCtrl',
			resolve: routeRoleChecks.signupUser
		})
		.when('/profile', {
			templateUrl: '/partials/account/profile',
			controller: 'mvProfileCtrl',
			resolve: routeRoleChecks.user
		})
		.when('/cars', {
			templateUrl: '/partials/cars/car-list',
			controller: 'mvCarListCtrl'
		})
		.when('/cars/:id', {
			templateUrl: '/partials/cars/car-details',
			controller: 'mvCarDetailCtrl'
		})
		.when('/cars/:id/booking', {
			templateUrl: '/partials/account/booking-details',
			controller: 'mvBookingDetailCtrl',
			resolve: routeRoleChecks.bookingUser
		})
		.when('/cars/:id/booking-success', {
			templateUrl: '/partials/account/booking-success',
			controller: 'mvBookingSuccessCtrl',
			resolve: routeRoleChecks.bookingUser
		})
		.when('/:userid/orders', {
			templateUrl: '/partials/account/orders',
			controller: 'mvOrdersCtrl',
			resolve: routeRoleChecks.bookingUser
		})
		.when('/404', {
			templateUrl: '/partials/main/404'
		})
		.otherwise({ redirectTo: '/404'});
});

angular.module('app').run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
		if (rejection === 'not authorized') {
			$location.path('/');
		}
	});
});