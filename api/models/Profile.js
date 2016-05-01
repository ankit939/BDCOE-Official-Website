/**
 * Updatepprofile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  		email: {
  			type: 'string'
  		},
		studno: {
			type: 'integer',
		},
		univno: {
			type: 'integer'
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
			type: 'integer'
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

