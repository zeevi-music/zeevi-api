var user 	= require('../../models/user'),
	Q 		=  require('q');

module.exports = function(router){

	// Create a new User
	router.post('/api/user/new', function(req,res){
		var username 	= req.body.username;
		var password 	= req.body.password;
		var passCifrado	= cifrar(username, password)

		var newUser 	= new user({
			username: username,
			email: req.body.email,
			password: passCifrado,
			profile: req.body.tipo
		});

		newUser.save();

		res.redirect('/user/home/'+username);
	});

	//Get data of a user
	router.get('/api/user/:username', function(req,res){
		var username = req.params.username;
		user
		.findOne({username: username})
		.exec(function(err,data){
			res.status(200).json(data);
		});
	});

	//Update data of a user
	router.put('/api/user/:username', function(req,res){
		var username = req.params.username;
		
		console.log(req.params);

		username = username.replace('_',' ');

		var update = update_functions(req,res);

		update
		.search_by_username(username)
		.then(update.update_genres_of_user)
		.then(update.search_by_username)
		.then(update.response_result)
		.fail(function(err){
			res.send("Error"+err)
		})
	});
		
};


function cifrar(user, pass) {
   var crypto = require('crypto')
   // usamos el metodo CreateHmac y le pasamos el parametro user y actualizamos el hash con la password
   var hmac = crypto.createHmac('sha1', user).update(pass).digest('hex')
   return hmac
}

function update_functions (req,res)
{
	var functions = {};

	functions.search_by_username = function (username) {
		
		var deferred = Q.defer();		
		user
		.findOne({username: username})
		.exec(function(err, data){
			if(err)
				deferred.reject(new Error(err));
			else 
				deferred.resolve(data);			
		});

		return deferred.promise;	
	}

	functions.update_genres_of_user = function (data) {
		
		var deferred = Q.defer();
		
		data.save(function(err,inf){
			if(err)
				deferred.reject(new Error(err));
			else
				deferred.resolve(data.username)
		});	

		return deferred.promise;

	}

	functions.response_result = function (data) {
		res.send(data);
	}

	return functions;
}



