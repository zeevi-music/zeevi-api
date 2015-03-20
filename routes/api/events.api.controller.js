var Event = require('../../models/events'),
  Q =  require('q');

module.exports = function (router) {

   // Create a new Event
  router.post('/api/events/new', function (req, res) {

    var band_name   = req.body.band_name;
    var venue_name  = req.body.venue_name;

    Event.findOne({
      band_name:  band_name,
      venue_name: venue_name
    })
      .exec(function (err, doc) {
        if (err) {
          res.send(err);
        } else if (doc) {
          if (!doc.active && !doc.rejected) {
            res.send("1");
          }
          if (doc.rejected) {
            res.send("2");
          }
          if (doc.active) {
            res.send("3");
          }
        } else {
          var request_to = req.body.request_to,
            hour = req.body.hour,
            date = req.body.date;

          console.log(req.body.hour);
          var newEvent = new Event({
            band_name:  band_name,
            venue_name: venue_name,
            request_to: request_to,
          });

          newEvent.save(function (err, data) {
            if (err) {
              res.send(err);
            } else {
              res.json(data);
            }
          });
        }
      });
  });

  // Event Confirmation
  router.put('/api/events/:type/:username', function (req, res) {
    var username = req.params.username.replace('_', ' ');
    var userType = req.params.type;
    var query;
    if (userType === 'band') {
      query = {band_name: username};
    } else {
      query = {venue_name: username};
    }
    Event.findOne(query, function (err, doc) {

      console.log(req.body);

      if (err) {
        res.send(500, { error: err });
      }
      doc.active = req.body.active;
      doc.rejected = req.body.rejected;

      if (req.body.active === true) {
        doc.date = req.body.date;
        doc.hour = req.body.hour;
      }

      doc.save(function (err, doc) {
        if (err) {
          res.send(err);
        } else {
          res.status(200).json(doc);
        }
      });
    });
  });

  // GET events
  router.get('/api/events/:type/:username', function (req, res) {
    var username = req.params.username.replace('_', ' ');
    var userType = req.params.type;
    console.log(" GET events " + userType);
    var query;
    if (userType === 'band') {
      query = {band_name: username, request_to: username, active: false, rejected: false};
    } else {
      query = {venue_name: username, request_to: username, active: false, rejected: false};
    }
    Event.find(query, function (err, data) {
      if (err) {
        console.log("Error");
      }
      console.log("Consultado");
      res.status(200).json(data);
    });
  });

  //GET active events
  router.get('/api/events/active', function (req, res) {
    Event
      .find({active: true})
      .exec(function (err, doc) {
        if (err) {
          res.send(err);
        } else {
          res.json(doc);
        }
      });
  });
};
