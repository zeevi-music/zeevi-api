Controller = (router,location) ->
	
	router
	.config [
		{path: "/news", component: "news" }
		{path: "/data", component: "data" }
		{path: "/request", component: "request" }
		{path: '/', redirectTo: '/news' }
	]

	location.path '/news'

	return
 
Controller.$inject = [
	'$router'
	'$location'
]

angular
.module('app')
.controller 'profileCtrl', Controller