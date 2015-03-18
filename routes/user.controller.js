module.exports = function(router){

	router.get('/user/home/:username', function(req,res){
		if( req.param('username') == req.session.userName ){
			res.render('home',{username: req.param('username')});
		}
		else{
			res.redirect('/login');
		}
	});

	router.get('/user/home/:username/solicitudes', function(req, res) {
	  res.render('solicitud');
	});
};