// Generated by CoffeeScript 1.9.1
var Controller;

Controller = function(scope, events) {
  var profile, url;
  if (scope.user.profile === 1) {
    profile = "band";
  } else {
    profile = "venue";
  }
  url = "/api/events/" + profile + "/" + scope.user.username;
  events.get_events_by_username(url).then(function(data) {
    scope.events = data.data;
    return console.log(scope.events);
  });
  return scope.resolve_event = function(event, selection) {
    if (selection === "confirm") {
      event.active = true;
      event.rejected = false;
    }
    if (selection === "reject") {
      event.active = false;
      event.rejected = true;
    }
    return events.update_event(url, event).then(function(data) {
      return console.log(data.data);
    });
  };
};

Controller.$inject = ['$scope', 'eventService'];

angular.module('app').controller('RequestController', Controller);
