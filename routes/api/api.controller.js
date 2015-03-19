module.exports = function (router) {
  var sesions_controller = require('./sesions.api.controller.js')(router),
    related_controller = require('./related.api.controller.js')(router),
    users_controller = require('./users.api.controller.js')(router),
    events_controller = require('./events.api.controller.js')(router);
};

