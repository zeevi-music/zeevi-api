var app = angular.module('app',[]);

/* Controllers functions */

var userController = function(scope,window,users) {
	scope.user = {};
	scope.related = [];

	/*scope.user.username = window.location.href//.substring(32)
	console.log(scope.user.username);*/
	
	users.get_all_user_data(scope.user.username)
		.then(function (data){
			console.log(data)
			scope.user = data.data;
			console.log(scope.user);

			users.get_all_users_by_genre(scope.user.genre)
			.then(function (data){
				console.log(data)
				scope.related = data.data.data;
				//console.log(scope.user);
			});

		});

	
};

/* Services */

var userService = function(http) {
	var result = {};
	result.get_all_user_data = function (username){
		return http({
			method: 'GET',
			url: '/api/user/'+'Slayer'
		});
	}
	result.get_all_users_by_genre = function (genre){
		console.log(genre)
		return http({
			method: 'GET',
			url: '/api/users/'+genre
		});
	}
	return result;
};

/* Controllers */

app.controller('userCtrl',userController);

/* Factory */

app.factory('userService', userService);

/* Injects */

userController.$inject = ['$scope', '$window', 'userService'];
userService.$inject  	= ['$http'];