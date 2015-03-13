var user = require('../models/user');

module.exports = function(router){

	router.post('/api/user/new', function(req,res){
		var username = req.body.username;
		var newUser = new user({
			username: username,
			email: req.body.email,
			password: req.body.password,
			profile: req.body.tipo
		});
		newUser.save();
		res.redirect('/user/home/'+username);
	});


	router.post('/api/user/new', function(req,res){
		var username = req.body.username;
	});

};
//res.status(200).json({});
