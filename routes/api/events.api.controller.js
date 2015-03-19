var Event = require('../../models/events'),
  Q =  require('q');

module.exports = function (router) {

   // Create a new Event
  router.post('/api/events/new', function (req, res) {
    var band_name   = req.body.band_name;
    var venue_name  = req.body.venue_name;
    var newEvent = new Event({
      band_name:  band_name,
      venue_name: venue_name,
    });
    newEvent.save(function (err, data) {
      if (err) {
        res.send(err);
      }
      res.json(data);
    });
  });

};


