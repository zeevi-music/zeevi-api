Controller = (scope, window, location, users) ->
  
  scope.user = {}
  scope.related = []

  fullUrl=  location.absUrl()
  path = fullUrl.substring(32)
  lol = path.split('/')

  user = lol[0]

  if (user.charAt(user.length-1) == '#')
    user = user.substring(0,lol[0].length-1) 
    console.log "hay un #"
  else 
    console.log 'no lo hay'

  scope.user.username = user

  console.log(scope.user.username);
  

  users.get_all_user_data(scope.user.username).then (data) ->
    
    scope.user = data.data
    
    users.get_all_users_by_genre(scope.user.genre).then (data) ->
      
      scope.related = data.data
      console.log scope.related
      return
    return
  return

Controller.$inject = [
  '$scope'
  '$window'
  '$location'
  'userService'
]

angular
.module('app')
.controller 'userCtrl', Controller
