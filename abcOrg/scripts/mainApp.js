var mainApp = angular.module('mainApp',['ngRoute']);
mainApp.config(function ($routeProvider) {
	$routeProvider.
		when('/home', {
					templateUrl: './views/home.html',
				}).when('/example', {
					templateUrl: './views/example.html',
				}).when('/aPage', {
					templateUrl: './views/aPage.html',
				}).when('/contact', {
					templateUrl: './views/contact.html',
				}).
				otherwise({redirectTo: '/home'});
});

 