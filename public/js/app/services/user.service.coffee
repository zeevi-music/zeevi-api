Service = (http, Q) ->
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

    functions.get_all_user_data = (username) ->
      deferred = Q.defer()
    
      result.get_all_user_data(username)
      .then (data) ->
        deferred.resolve data.data
        return

      return deferred.promise 

    functions.get_all_users_by_genre = (user_data) ->
      deferred = Q.defer()
      result.get_all_users_by_genre(user_data.profile, user_data.genres)
      .then (data) ->
        deferred.resolve data.data        
        return

      return deferred.promise 

    return functions

  result

Service.$inject = ['$http', '$q' ]

angular
.module('app')
.factory 'userService', Service