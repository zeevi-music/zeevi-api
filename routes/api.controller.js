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


};


function cifrar(user, pass) {
   var crypto = require('crypto')
   // usamos el metodo CreateHmac y le pasamos el parametro user y actualizamos el hash con la password
   var hmac = crypto.createHmac('sha1', user).update(pass).digest('hex')
   return hmac
}