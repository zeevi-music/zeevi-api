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

  // Event Confirmation
  router.put('/api/events/:type/:username', function(req,res){
    var username = req.params.username.replace('_',' ');
    var userType =req.params.type;
    var query;
    if(userType == 'band'){
      query = {band_name: username};
    }else{
      query = {venue_name: username};
    }
    var update = {active: true};
    Event.findOne(query, function(err, doc){
        if (err) return res.send(500, { error: err });
        console.log(doc.venue_name);
        doc.active = true;
        doc.save();
        res.send("Success Update");
    });
  });

  router.get('/api/events/:type/:username', function(req, res){
    var username = req.params.username.replace('_',' ');
    var userType =req.params.type;
    console.log(" GET events "+userType);
    var query;
    if(userType == 'band'){
      query = {band_name: username};
    }else{
      query = {venue_name: username};
    }
    Event.find(query,function(err,data){
      if(err){
        console.log("Error");
      }
      console.log("Consultado");
      res.status(200).json(data);
    });
  });

};


