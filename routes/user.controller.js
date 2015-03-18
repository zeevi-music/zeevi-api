module.exports = function(router){

	router.get('/user/home/:username', function(req,res){
		res.render('home',{username: req.param('username')});
	});

	router.get('/user/home/:username/solicitudes', function(req, res) {
	  res.render('solicitud');
	});
};