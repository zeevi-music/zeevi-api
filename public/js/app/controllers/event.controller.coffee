Controller = (scope,events) ->

	events
	.get_active_events()
	.then (data) ->
		scope.active_events = data.data
		console.log(data)


Controller.$inject = [
	'$scope', 
 	'eventService'
]

angular
.module 'app'
.controller 'EventController', Controller