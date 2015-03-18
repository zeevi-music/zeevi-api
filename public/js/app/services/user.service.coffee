Service = (http) ->
  result = {}

  result.get_all_user_data = (username) ->
    http
      method: 'GET'
      url: '/api/user/' + username

  result.get_all_users_by_genre = (genre) ->
    console.log genre
    http
      method: 'GET'
      url: '/api/users/' + genre

  result

Service.$inject = [ '$http' ]

angular
.module('app')
.factory 'userService', Service