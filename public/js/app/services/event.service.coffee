Service = (http) ->
  result = {}

  result.new_event = (data) ->
    http
      method: 'POST'
      url: '/api/events/new'
      data: data

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