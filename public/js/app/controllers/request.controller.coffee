Controller = (scope, events) ->

	if scope.user.profile == 1
		profile = "band"
	else
		profile = "venue"

	url = "/api/events/"+profile+"/"+scope.user.username

	events
	.get_events_by_username(url)
	.then (data) ->
		scope.events = data.data
		console.log scope.events

	scope.resolve_event = (event, selection) ->		
		#console.log(event)
		
		if selection == "confirm"
			event.active 	= true
			event.rejected 	= false


		if selection == "reject"
			event.active 	= false
			event.rejected 	= true
		
		events
		.update_event(url,event)
		.then (data) ->
			console.log(data.data)

Controller.$inject = [
  '$scope'
  'eventService'
]

angular
.module 'app'
.controller 'RequestController', Controller