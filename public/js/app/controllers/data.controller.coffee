Controller = (scope, users) ->
	
	
	scope.update = {}

	genero = scope.user.genres[0]

	scope.update.genero = genero
	#scope.update.addres = scope.user.addres  
	#scope.update.history = scope.user.history

	scope.update.change_genre = () ->
		console.log("change")
		data = scope.user
		data.genres[0] = scope.update.genero
		data.history = scope.update.history
		data.addres = scope.update.addres
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