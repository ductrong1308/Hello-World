'use strict';

omega.filter('jsonDateFilter', ['$http', function ($http) {
	return function (input) {
		if (input != null && input != undefined) {
			var date = new Date(input);

			var day = date.getDate(), month = date.getMonth() + 1;
			var displayDay = day < 10 ? "0" + day : day;
			var displayMonth = month < 10 ? "0" + month : month;

			return (displayDay + '/' + displayMonth + '/' + date.getFullYear());
		}
	};
}]);