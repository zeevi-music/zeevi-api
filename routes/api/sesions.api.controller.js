var user 	= require('../../models/user');

module.exports = function(router){
	// Login of a user
	router.post('/api/user/login', function(req,res){
		var username = req.body.username;
		var pass = req.body.password;
		var passCifrado = cifrar(username,pass);
		user.findOne({username: username}, function(err,user) {
			if(user==null){
				console.log("Ese Username no existe");
				res.redirect('/login');
			}
			else{
				if(user.password === passCifrado){
					// Creamos una sesion y almacenamos el username y el tipo de usuario
					req.session.userName = username;
					req.session.profile = user.profile;
					res.redirect('/user/home/'+username);
				}
				else{
					console.log("Password Incorrecto");
					res.redirect('/login');
				}
			}
		});
	});
	//Log out
	router.get('/api/user/logout', function(req,res){
		req.session = null;
		res.redirect('/');
	});
}

function cifrar(user, pass) {
   var crypto = require('crypto')
   // usamos el metodo CreateHmac y le pasamos el parametro user y actualizamos el hash con la password
   var hmac = crypto.createHmac('sha1', user).update(pass).digest('hex')
   return hmac
}