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
		},
		studno: {
			type: 'string'
		},
		univno: {
			type: 'string'
		},
		branch: {
			type: 'string'
		},
		section: {
			type: 'string'
		},
		year: {
			type: 'string'
		},
		mobileno: {
			type: 'string'
		},
		softdev: {
			type: 'boolean'
		},
		webdev: {
			type: 'boolean'
		},
		androiddev: {
			type: 'boolean'
		},
		dataanalytics: {
			type: 'boolean'
		},
		designing: {
			type: 'boolean'
		},
		cloudcomp: {
			type: 'boolean'
		},
		artificialint: {
			type: 'boolean'
		},
		others: {
			type: 'boolean'
		}
	}
};