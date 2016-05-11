module.exports = {
	checkAdmin: function(req, res){
		if(!req.session.me){
			return res.view('login');
		} else{
			return res.view('admin');
		}
	},
	login: function(req, res){
		req.session.me = req.param('id');
		return res.ok();
	},
	logout: function(req, res){
			req.session.me = null;
			return res.redirect('/login');
	},
	getAllUsers: function(req, res){
		User.find({}, function(err, user){
			if(err){
				res.negotiate(err);
			}
			return res.send(user);
		})
	}
};