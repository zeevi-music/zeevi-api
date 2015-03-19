Service = (scope, http, Q) ->
  result = {}

  result.get_all_user_data = (username) ->
    http
      method: 'GET'
      url: '/api/user/' + username

  result.get_all_users_by_genre = (type,genre) ->
    
    url = '/api/'

    if type == 1
      url += 'venues/'

    if type == 2
      url += 'bands/'

    url += genre[0]

    http
      method: 'GET'
      url: url

  result.update_users_genres = (data) ->
    console.log data
    url = "/api/user/"+data.username

    http
      method: 'PUT'
      url: url
      data: data

  result.get_data_from_api = () -> 
    functions = {}    

    functions.get_all_user_data = () ->
      deferred = Q.defer()
    
      result.get_all_user_data(scope.user.username)
      .then (data) ->
        scope.user = data.data
        deferred.resolve scope.user
        return

      return deferred.promise 

    functions.get_all_users_by_genre = (inf) ->
      result.get_all_users_by_genre(scope.user.profile, scope.user.genres)
      .then (data) ->

        scope.related = data.data
        
        return

      return 

    return functions

  result

Service.$inject = ['$scope', '$http', '$Q' ]

angular
.module('app')
.factory 'userService', Service