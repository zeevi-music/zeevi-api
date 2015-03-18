Service = (http) ->
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

  result

Service.$inject = [ '$http' ]

angular
.module('app')
.factory 'userService', Service