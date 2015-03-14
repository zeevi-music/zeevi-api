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


	router.get('/api/user/:username', function(req,res){
		var username = req.params.username;
		console.log(username)
		user
		.findOne({username: username})
		.exec(function(err,data){
			res.status(200).json(data);
		});
	});

	router.get('/api/users/:genre', function(req,res){
		var genre = req.params.genre;
		user
		.find({genre: genre, profile:2})
		.exec(function(err,data){
			if(err)
				res.send(err)
			res.status(200).json(data);
		});
	});

};
//res.status(200).json({});