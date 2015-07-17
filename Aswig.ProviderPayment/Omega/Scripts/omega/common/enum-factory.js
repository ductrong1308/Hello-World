'use strict';

omega.factory('enumFactory', [function () {
	var enums = {};

	enums.messageTypeEnums = {
		success: 1,
		error: 2,
		warning: 3,
		info: 4
	};

	//More enum here

	return enums;
}]);