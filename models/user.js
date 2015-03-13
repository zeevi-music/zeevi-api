var mongoose 	= require('./models'),
	Schema 		= mongoose.Schema;

/*
	Profile
		1 Banda
		2 Lugar
		3 Fan
*/

var userSchema = new Schema({
	username: 	{type: String, require: true},
	email: 		{type: String, require: true},
	password: 	{type: String, require: true},
	profile: 	{type: Number, require: true}
});

module.exports = mongoose.model('user',userSchema);