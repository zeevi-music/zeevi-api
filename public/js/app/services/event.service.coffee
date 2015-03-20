Service = (http) ->
  result = {}

  result.new_event = (data) ->
    http
      method: 'POST'
      url: '/api/events/new'
      data: data

  result.update_event = (url,data) ->

    http
      method: 'PUT'
      url: url
      data: data

  result.get_events_by_username = (url) ->
    http
      method: 'GET'
      url: url

  result.get_active_events = () ->
    http 
      method: 'GET'
      url: '/api/events/active'

  return result

Service.$inject = ['$http']

angular
.module('app')
.factory 'eventService', Service

###
  result.promises = () ->

    promises = {}    

    promises.create_new_event = (data) ->
      deferred = Q.defer()
    
      result.new_event(data)
      .then (data) ->
        deferred.resolve data.data
        return

      return deferred.promise 
###