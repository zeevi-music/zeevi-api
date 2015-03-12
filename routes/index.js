var express = require('express'),
	router 	= express.Router(),
	user_controller = require('./user.controller')(router)

/* GET home page. */

router.get('/', function(req, res) {
  res.status(200).json({ error: 'message' })
});

module.exports = router;