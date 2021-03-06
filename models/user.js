var mongoose 	= require('./models'),
	Schema 		= mongoose.Schema;

var userSchema = new Schema({
	username: 	{type: String, require: true},
	email: 		{type: String, require: true},
	password: 	{type: String, require: true},
	profile: 	{type: Number, require: true},
	addres: 	{type: String, default: null},
	history: 	{type: String, default: null},
	genres: 	[],
	requests: 	[],

	city: 		{type: String, default: null},
	phone: 		{type: String, default: null},
	facebook: 	{type: String, default: null},
	twitter: 	{type: String, default: null},
	soundcloud: {type: String, default: null},
	foursquare: {type: String, default: null}
});

module.exports = mongoose.model('user',userSchema);
/*
	Profile
		1 Banda
		2 Lugar
		3 Fan
*/
