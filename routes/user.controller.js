module.exports = function(router){

	router
	.get('/api/all/user', function(req,res){
		res.status(200).json({users : [
				{
					username: 'Richard'
				},
				{
					username: 'Alex'
				}			
		]})
	})
	.post('/api/user/new', function(req,res){
		var username = req.body.username;
	})

};