var express = require('express'),
	router 	= express.Router(),
	user_controller = require('./user.controller')(router)

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index')
});

router.get('/login', function(req, res) {
  res.render('login');
});

router.get('/login', function(req, res) {
  res.render('login');
});

module.exports = router;