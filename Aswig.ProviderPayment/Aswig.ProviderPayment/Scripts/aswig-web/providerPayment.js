'use strict';

var registrationModule = angular.module('registrationModule', ['ngRoute', 'ngResource'])
	.config(['$routeProvider', function ($routeProvider) {
	}]);

var customerModule = angular.module('customerModule', ['ngRoute', 'ngResource'])
	.config(['$routeProvider', function ($routeProvider) {
	}]);

var providerPayment = angular.module('providerPayment', ['registrationModule', 'customerModule', 'ui.bootstrap', 'ngRoute', 'ngResource', 'pascalprecht.translate'])
	.config(['$routeProvider', '$locationProvider', '$translateProvider', function ($routeProvider, $locationProvider, $translateProvider) {
		$routeProvider
			.when('/Home/AccessDenied',
			{
				templateUrl: '/Pages/Common/AccessDenied.html'
			})
			.when('/ProviderPayment/Customer',
			{
				templateUrl: '/Customer/Index',
				controller: 'customerController'
			})
			.when('/ProviderPayment/Registration',
			{
				templateUrl: '/Registration/Index', // or using: /partials/{MVCController} and then config the route in RouteConfig
				controller: 'registrationController'
			})
			.when('/ProviderPayment/ContactUs',
			{
				templateUrl: '/Pages/ContactUs/contact-us.html'
			})
			.otherwise({ redirectTo: "/" });

		$translateProvider.useLoader('resourceFactory', {}).preferredLanguage('en');

		//http://stackoverflow.com/questions/16677528/location-switching-between-html5-and-hashbang-mode-link-rewriting
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});

	}]).controller('navigationController', ['$scope', '$location', '$translate', function ($scope, $location, $translate) {
		$scope.activeLanguage = 2;
		$scope.languages = [
			{
				id: 1,
				name: 'Tiếng Việt',
				key: 'vi'
			},
			{
				id: 2,
				name: 'English',
				key: 'en-US'
			}
		];

		$scope.changeLanguage = function (language) {
			$scope.activeLanguage = language.id;
			$translate.use(language.key);
		};

		$scope.isActiveLink = function (currentLocation) {
			return currentLocation === $location.path();
		};
	}]).directive('datepickerPopup', function () {
		return {
			restrict: 'EAC',
			require: 'ngModel',
			link: function (scope, element, attr, controller) {
				//remove the default formatter from the input directive to prevent conflict
				controller.$formatters.shift();
			}
		}
	}).directive('loading', ['$http', function ($http) {
	return {
		restrict: 'A',
		link: function (scope, elm, attrs) {
			scope.isLoading = function () {
				return $http.pendingRequests.length > 0;
			};

			scope.$watch(scope.isLoading, function (v) {
				v ? elm.show() : elm.hide();
			});
		}
	};

}]);