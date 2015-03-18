var mongoose 	= require('./models'),
	Schema 		= mongoose.Schema;

var userSchema = new Schema({
	username: 	{type: String, require: true},
	email: 		{type: String, require: true},
	password: 	{type: String, require: true},
	profile: 	{type: Number, require: true},
	genres: 	[],
	requests: 	[]
});

module.exports = mongoose.model('user',userSchema);
/*
	Profile
		1 Banda
		2 Lugar
		3 Fan
*/
