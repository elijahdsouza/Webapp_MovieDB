define(
	[
		'backbone',
		'constants'
	],
	function(Backbone, Constants) {

		var bluRay = Backbone.Model.extend({
			defaults: {
				Title: 'Title',
				Url: Constants.API_ROOT + '/brimg?id='
			},

			initialize: function(){
				var url = this.get('Url') + this.get('Id');
				this.set('Url', url)
			}
		});

		return bluRay;
	});