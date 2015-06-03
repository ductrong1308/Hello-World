'use strict';

customerModule.factory('customerRepository', ['$http', '$q', function ($http, $q) {
	return {
		getAllCustomers: function () {
			var deferred = $q.defer();
			$http.get('/Customer/GetAllCustomers', {}).success(function (data) {
				deferred.resolve(data);
			}).error(function (data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},
		addNewCustomer: function () {
			var deferred = $q.defer();
			$http.post('/Customer/AddNewCustomer').success(function (data) {
				deferred.resolve(data);
			}).error(function (data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		},
		editCustomer: function (customer) {
			var deferred = $q.defer();
			$http.post('/api/Action/EditCustomer', customer).success(function (data) {
				deferred.resolve(data);
			}).error(function (data, status) {
				deferred.reject(data);
			});

			return deferred.promise;
		}
	};
}]);