var mongoose = require('./models'),
  Schema = mongoose.Schema;

var eventSchema = new Schema({
  band_name: 	{type: String, 	require: true},
  venue_name: 	{type: String, 	require: true},
  request_to: 	{type: String, 	require: true},
  date: 		{type: Date, 	default: null},
  hour: 		{type: Date, 	default: null},
  genre: 		{type: String,	default: null},
  active: 		{type: Boolean, default: false},
  rejected: 	{type: Boolean, default: false}
});

module.exports = mongoose.model('event', eventSchema);