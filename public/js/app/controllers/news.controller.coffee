Controller = (scope, users, events) ->

	data = {}

	scope.request_new_event = (card_name)->
		
		if(scope.user.profile == 1)
			console.log scope.user.username+' have a new event in ' + card_name

			data = 
				band_name: 	scope.user.username
				venue_name: card_name
				request_to: card_name

		if(scope.user.profile == 2)
			console.log scope.user.username+' have a new event with ' + card_name

			data = 
				venue_name: scope.user.username
				band_name: 	card_name		
				request_to: card_name

		events
		.new_event(data)
		.then (data) ->
			event_exist_status = data.data
			if(event_exist_status == "1")
				alert("Solicitud pendiente!");
			if(event_exist_status == "2")
				alert("Han rechazado tu evento :C !");
			if(event_exist_status == "3")
				alert("Han Aceptado tu evento :D !");
			else
				alert("Evento solicitado exitosa mente")

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
  'userService'
  'eventService'
]

angular
.module 'app'
.controller 'NewsController', Controller