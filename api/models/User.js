module.exports = {
	attributes: {
		firstname: {
			type: 'string',
			required: true
		},
		lastname: {
			type: 'string',
			required: true
		},
		email: {
			type:'string',
			email: true,
			required: true,
			unique: true
		},
		password: {
			type:'string',
			required: true
		},
		lastLoggedIn: {
			type: 'date',
			required: true,
			defaultsTo: new Date(0)
		},
		gravatarUrl: {
			type: 'string'
		}
	}
};