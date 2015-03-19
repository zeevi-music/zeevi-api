var mongoose = require('./events'),
  Schema = mongoose.Schema;

var eventSchema = new Schema({
  band_name: {type: String, require: true},
  venue_name: {type: String, require: true},
  date: null,
  hour: null,
  status: false,
  rejected: false
});

module.exports = mongoose.model('event', eventSchema);
