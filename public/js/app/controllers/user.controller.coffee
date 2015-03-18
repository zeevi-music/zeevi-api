Controller = (scope, window, location, users, Q) ->

  scope.user = {}
  scope.related = []

  fullUrl=  location.absUrl()
  path = fullUrl.substring(32)
  lol = path.split('/')

  user = lol[0]

  if (user.charAt(user.length-1) == '#')
    user = user.substring(0,lol[0].length-1) 

  scope.user.username = user
  
  get_data_from_api = () -> 
    functions = {}    

    functions.get_all_user_data = () ->
      deferred = Q.defer()
    
      users.get_all_user_data(scope.user.username)
      .then (data) ->
        scope.user = data.data
        deferred.resolve scope.user
        return

      return deferred.promise 

    functions.get_all_users_by_genre = (inf) ->
      
      #deferred = Q.defer()
      
      users.get_all_users_by_genre(scope.user.profile, scope.user.genres)
      .then (data) ->
        scope.related = data.data
        #deferred.resolve()
        return

      return #deferred.promise

    return functions

  gD = get_data_from_api()

  gD
  .get_all_user_data()
  .then gD.get_all_users_by_genre

  return 

Controller.$inject = [
  '$scope'
  '$window'
  '$location'
  'userService'
  '$q'
]

angular
.module('app')
.controller 'userCtrl', Controller
