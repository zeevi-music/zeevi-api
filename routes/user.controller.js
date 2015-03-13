module.exports = function(router){

	router.get('/user/home/:username', function(req,res){
		res.render('home',{username: req.param('username')});
	});
};