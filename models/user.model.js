var mongoose 	= require('./models'),
	Schema 		= mongoose.Schema;

var userSchema = new Schema({
	username: 	String,
	email: 		String,
	password: 	String,
	profile: 	Number
});

model.export = mongoose.model('user',userSchema);