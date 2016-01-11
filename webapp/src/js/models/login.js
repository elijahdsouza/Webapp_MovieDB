define(
	[
		'backbone',
		'constants',
	],
	function(Backbone, Constants) {

		var login = Backbone.Model.extend({
			url: Constants.API_ROOT + '/register',

			defaults: {
				username: 'Guest'
			}
		});

		return login;
	});