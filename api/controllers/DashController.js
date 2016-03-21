module.exports = {
	//Sign User to
	checkUser: function(req, res){
		if(!req.session.me){
			console.log('You are not logged In');
			return res.view('login');
		} else{
			console.log("You are logged In");
			return res.view('dashboard');
		}
	},

	getUser: function(req, res){
		console.log('Running getUser');

		User.findOne({id: req.session.me}, function(err, user){
			if(err){
				res.negotiate(err);
			}
			return res.send(user);
		})
	}
};