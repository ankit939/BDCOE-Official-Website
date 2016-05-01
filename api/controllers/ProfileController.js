module.exports = {
	createProfile: function(req, res){
						// Create User
						Profile.create({
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
						}, function profileCreated(err, newProfile){
							if(err){
								console.log('Error: '+err);
								return res.negotiate(err);
							}
							//SESSION VAR
							return res.json({
								id: newProfile.id
							});
						})
					},
	getProfile: function(req, res){
		Profile.findOne({email: req.session.me.email}, function(err, profile){
			if(err){
				res.negotiate(err);
			}
			return res.send(profile);
		})
	}
};