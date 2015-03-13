var express = require('express'),
	router 	= express.Router();

var user_controller 	= require('./user.controller')(router),
	api_controller 		= require('./api.controller')(router)

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/signup', function(req, res) {
  res.render('signup');
});

module.exports = router;