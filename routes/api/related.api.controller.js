var user 	= require('../../models/user');

module.exports = function(router){	

	//Get places from genre
	router.get('/api/venues/:genre', function(req,res){
		var genre = req.params.genre;

		user
		.find({genres: genre, profile:2})
		.exec(function(err,data){
			if(err)
				res.send(err)
			res.status(200).json(data);
		});
	});
	
	//Get bands from genre
	router.get('/api/bands/:genre', function(req,res){		
		var genre = req.params.genre;
		user
		.find({genres: genre, profile:1})
		.exec(function(err,data){
			if(err)
				res.send(err)
			res.status(200).json(data);
		});
	});
}