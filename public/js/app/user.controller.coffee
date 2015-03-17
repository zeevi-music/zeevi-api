angular
.module('app')
.controller controller 'userCtrl', Controller

Controller = (scope, window, users) ->
  scope.user = {}
  scope.related = []

  ###scope.user.username = window.location.href//.substring(32)
  console.log(scope.user.username);
  ###

  users.get_all_user_data(scope.user.username).then (data) ->
    console.log data
    scope.user = data.data
    console.log scope.user
    users.get_all_users_by_genre(scope.user.genre).then (data) ->
      console.log data
      scope.related = data.data.data
      #console.log(scope.user);
      return
    return
  return

Controller.$inject = [
  '$scope'
  '$window'
  'userService'
]