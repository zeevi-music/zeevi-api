Controller = (scope, location, users) ->

  scope.user = {}
  scope.related = []

  get_username = () ->

    fullUrl=  location.absUrl()
    path = fullUrl.substring(32)
    path_parts = path.split('/')

    user = path_parts[0]

    if (user.charAt(user.length-1) == '#')
      user = user.substring(0, path_parts[0].length-1) 

    scope.user.username = user
  
  get_username()
  
  users
  .get_data_from_api()
  .get_all_user_data(scope.user.username)
  .then (data) ->
    scope.user = data    
    console.log scope.user

    users
      .get_data_from_api()
      .get_all_users_by_genre(data)
      .then (data) ->
        scope.related = data
        console.log scope.related
        return

    return

  

  return 

Controller.$inject = [
  '$scope'
  '$location'
  'userService',
  'eventService'
]

angular
.module('app')
.controller 'userCtrl', Controller
