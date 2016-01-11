define(
	[
		'backbone',
		'constants',
	],
	function(Backbone, Constants) {

		var book = Backbone.Model.extend({
			defaults: {
				AuthorInitials: 'Initials',
				AuthorSurname: 'Last Name',
				Title: 'Title',
				Url: Constants.API_ROOT + '/bookimg?id='
			},

			initialize: function() {
				var url = this.get('Url') + this.get('Id');
				this.set('Url', url)
			}
		});

		return book;
	});