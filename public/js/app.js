var app = angular.module('app',[]);

/* Controllers functions */

var loginController = function(scope,users) {

};

/* Services */

var userService = function(http) {
	var result = {};
	resultado.get_all_user_data = function (){
		return http({
			method: 'GET',
			url: '/api/users/all'
		});
	}
	return result;
};

/* Controllers */

app.controller('loginCtrl',loginController);

/* Factory */

app.factory('userService', userService);

/* Injects */

loginController.$inject = ['$scope', 'userService'];
userService.$inject  	= ['http'];