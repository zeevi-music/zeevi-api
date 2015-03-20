var mongoose = require('./models'),
  Schema = mongoose.Schema;

var eventSchema = new Schema({
  band_name: {type: String, require: true},
  venue_name: {type: String, require: true},
  request_to: String,
  date: "",
  hour: "",
  active: false,
  rejected: false
});

module.exports = mongoose.model('event', eventSchema);