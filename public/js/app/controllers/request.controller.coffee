Controller = (scope, events) ->
	
	scope.event = {}

	if scope.user.profile == 1
		profile = "band"
	else
		profile = "venue"

	url = "/api/events/"+profile+"/"+scope.user.username

	events
	.get_events_by_username(url)
	.then (data) ->
		scope.events = data
		console.log scope.events

	scope.resolve_event = (selection) ->		

		if selection == "confirm"
			scope.event.active 		= true
			scope.event.rejected 	= false

		if selection == "reject"
			scope.event.active 		= false
			scope.event.rejected 	= true

		console.log(url);
		console.log(scope.event);
		#events.update_event(url,data)

Controller.$inject = [
  '$scope'
  'eventService'
]

angular
.module 'app'
.controller 'RequestController', Controller