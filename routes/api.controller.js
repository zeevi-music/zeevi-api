var user = require('../models/models');

module.exports = function(router){

	router.post('/api/user/new', function(req,res){
		var newUser = new user({
			username: req.body.username, 
			email: req.body.email,
			password: req.body.password,
			profile: req.body.tipo
		});
		newUser.save();
		res.redirect();
	});		

	
	router.post('/api/user/new', function(req,res){
		var username = req.body.username;
	});

};
//res.status(200).json({});
	