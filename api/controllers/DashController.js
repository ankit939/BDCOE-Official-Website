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
	},
	account: function(req, res){
		if((req.param('newemail').length > 0)&&(req.param('oldpassword').length > 0)&&(req.param('newpassword'.length > 0))){
			User.update({
			id: req.session.me
			}, { email: req.param('newemail')}
			).exec(function(err, account){
			if(err){
				console.log('Error: '+err);
				return res.negotiate(err);
					}
			User.findOne({
			id: req.session.me
			}, function foundUser(err, user){
			if(err){
				return res.negotiate(err);
			}
			if(!user){
				return res.notFound();
			}
			
			require('machinepack-passwords').checkPassword({
				passwordAttempt: req.param('oldpassword'),
				encryptedPassword: user.password
			}).exec({
				error: function(err){
					return res.negotiate(err);
				},
				incorrect: function(){
					return res.notFound();
				},
				success: function(){
						var Passwords = require('machinepack-passwords');

		//Encrypt Password
		Passwords.encryptPassword({
			password: req.param('newpassword'),
			difficulty: 10,
		}).exec({
			error: function(err){
				return res.negotiate(err);
			},
			success: function(encryptedPassword){
				require('machinepack-gravatar').getImageUrl({
					emailAddress: user.email
				}).exec({
					error: function(err){
						return res.negotiate(err);

					},
					success: function(){
							return res.ok();
						}
					})
					}
				})
				}
			})
			})
			})
		}else if(req.param('newemail').length > 0){
		User.update({
			id: req.session.me
		}, { email: req.param('newemail')}
			).exec(function(err, account){
			if(err){
				console.log('Error: '+err);
				return res.negotiate(err);
					}
				return res.ok();
			})
		}else if((req.param('oldpassword').length > 0)&&(req.param('newpassword'.length > 0))){
			User.findOne({
			id: req.session.me
			}, function foundUser(err, user){
			if(err){
				return res.negotiate(err);
			}
			if(!user){
				return res.notFound();
			}
			require('machinepack-passwords').checkPassword({
				passwordAttempt: req.param('oldpassword'),
				encryptedPassword: user.password
			}).exec({
				error: function(err){
					return res.negotiate(err);
				},
				incorrect: function(){
					return res.notFound();
				},
				success: function(){
						var Passwords = require('machinepack-passwords');

		//Encrypt Password
		Passwords.encryptPassword({
			password: req.param('newpassword'),
			difficulty: 10,
		}).exec({
			error: function(err){
				return res.negotiate(err);
			},
			success: function(encryptedPassword){
				require('machinepack-gravatar').getImageUrl({
					emailAddress: user.email
				}).exec({
					error: function(err){
						return res.negotiate(err);

					},
					success: function(){
							return res.ok();
						}
					})
					}
				})
				}
			})
			})
		}
	}
};