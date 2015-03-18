Controller = (scope, users) ->
	console.log 'Data'
	scope.update = {}

	genero = scope.user.genres[0]

	scope.update.genero = genero

	scope.update.change_genre = () ->
		console.log("change")
		data = scope.user
		data.genres[0] = scope.update.genero

		users
		.update_users_genres(data)
		.then (data) ->
			#console.log(data)
			scope.update.genero = data.data.genres[0]
			scope.user = data.data

Controller.$inject = ['$scope','userService']

angular
.module 'app'
.controller 'DataController', Controller