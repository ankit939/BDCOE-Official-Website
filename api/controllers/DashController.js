module.exports = {
	//Sign User to
	checkUser: function(req, res){
		if(!req.session.me){
			return res.view('login');
		} else{
			return res.view('dashboard');
		}
	},
	createProfile: function(req, res){
						// Create Profile
						User.update({id: req.session.me}, {  
							studno: req.param('studno'),
                			univno: req.param('univno'),
                			branch: req.param('branch'),
                			section: req.param('section'),
                			year: req.param('year'),
                			mobileno: req.param('mobileno'),
                			softdev: req.param('softdev'),
                			webdev: req.param('webdev'),
                			androiddev: req.param('androiddev'),
                			dataanalytics: req.param('dataanalytics'),
                			designing: req.param('designing'),
                			cloudcomp: req.param('cloudcomp'),
                			artificialint: req.param('artificialint'),
                			others: req.param('others')
						}).exec(function(err, newProfile) {
							if(err){
								console.log('Error: '+err);
								return res.negotiate(err);
							}
							return res.ok();
						})
					},
	getUser: function(req, res){
		User.findOne({id: req.session.me}, function(err, user){
			if(err){
				res.negotiate(err);
			}
			return res.send(user);
		})
	}
};