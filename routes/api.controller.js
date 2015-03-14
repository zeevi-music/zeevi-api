var user = require('../models/user');

module.exports = function(router){

	router.post('/api/user/new', function(req,res){
		var username = req.body.username;
		var password = req.body.password;
		var passCifrado= cifrar(username, password)
		var newUser = new user({
			username: username,
			email: req.body.email,
			password: passCifrado,
			profile: req.body.tipo
		});
		newUser.save();
		res.redirect('/user/home/'+username);
	});

	router.post('/api/user/login', function(req,res){
		var username = req.body.username;
		var pass = req.body.password;
		var passCifrado = cifrar(username,pass);
		user.findOne({username: username}, function(err,user) {
			console.log(err);

			if(user === null){
				console.log("No encontro");
				res.redirect('/login');
			}
			else{
				var pass1 = user.password;
				if(pass1 === passCifrado){
					console.log('INICIO ')
					res.redirect('/user/home/'+username);
				}
				else{
					console.log("No encontro");
					res.redirect('/login');
				}
			}

		});
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



function cifrar(user, pass) {
   var crypto = require('crypto')
   // usamos el metodo CreateHmac y le pasamos el parametro user y actualizamos el hash con la password
   var hmac = crypto.createHmac('sha1', user).update(pass).digest('hex')
   return hmac
}

