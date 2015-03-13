var express = require('express'),
	router 	= express.Router(),
	user_controller = require('./user.controller')
/* GET home page. */

router.get('/', function(req, res) {
  res.render('index')
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/signup', function(req, res) {
  res.render('signup');
});

module.exports = router;