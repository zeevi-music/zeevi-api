module.exports = function(router){

	router.get('/user/home', function(req,res){
		res.render('./home');
	});

};