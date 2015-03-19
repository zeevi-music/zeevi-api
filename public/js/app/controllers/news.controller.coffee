Controller = (scope, window, users, events) ->

	data = {}

	scope.request_new_event = (card_name)->
		
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

		events
		.new_event(data)
		.then (data) ->
			console.log(data)
			return

		return

	scope.lol = "lol"

	load_related_profiles = () ->		
		user
	  	.get_data_from_api()
	  	.get_all_users_by_genre(scope.user)
	  	.then (data) ->
	    	scope.related = data
	    	console.log scope.related
	    	return
	    return		
	
	return

Controller.$inject = [
  '$scope'
  '$window'
  'userService'
  'eventService'
]

angular
.module 'app'
.controller 'NewsController', Controller