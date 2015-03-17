angular
.module('app')
.controller 'profileController', Controller

Controller = (router,location) ->
	router
	.config [
		{path: "/", component: "news" }
	]
	location.path '/'
 
Controller.$inject = [
	'$router'
	'$location'
]