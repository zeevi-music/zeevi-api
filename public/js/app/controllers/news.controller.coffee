Controller = (scope) ->
	data = {}
	scope.request_new_event = (card_name)->
		console.log scope.user
		if(scope.user.profile == 1)
			console.log scope.user.username+' have a new event in ' + card_name

			data = 
				band_name: 	scope.user.username
				venue_name: card_name

		if(scope.user.profile == 2)
			console.log scope.user.username+' have a new event with ' + card_name

			data = 
				venue_name: scope.user.username
				band_name: 	card_name

		

		return
	return

Controller.$inject = ['$scope']

angular
.module 'app'
.controller 'NewsController', Controller