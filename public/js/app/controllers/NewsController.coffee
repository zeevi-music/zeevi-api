Controller = (location) ->
	console.log 'estoy en '+location.path()
	return

Controller.$inject = ['$location']

angular
.module('app')
.controller 'NewsController', Controller