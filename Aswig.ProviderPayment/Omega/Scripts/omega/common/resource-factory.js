﻿'use strict';

omega.factory('resourceFactory', ['$http', '$q', function ($http, $q) {
	return function (options) {
		var deferred = $q.defer();
		$http.get('/api/Resource/Get?lang=' + options.key)
        .success(function (data) {
        	data = angular.fromJson(angular.fromJson(data));
        	deferred.resolve(data);
        }).error(deferred.reject);

		return deferred.promise;
	};
}]);