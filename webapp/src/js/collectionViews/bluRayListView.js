define(
	[
		'jquery',
		'underscore',
		'backbone',
		'views/bluRayView',
		'collections/bluRayLibrary'
	],
	function($, _, Backbone, BluRayView, BluRayLibrary) {

		var bluRayListView = Backbone.View.extend({
			el: '#library',

			template: _.template($('#library-template').html()),

			initialize: function() {
				this.collection = new BluRayLibrary();
				this.collection.bind('reset', this.render, this);
				this.collection.fetch({
					reset: true
				});
			},
			events: {
				'#category change': function() {
					debugger
				}
			},
			render: function() {
				var self = this;

				this.$el.html(this.template());
				_.each(this.collection.models, function(bluRay) {
					self.renderBooks(bluRay);
				}, this);

				return this;
			},

			renderBooks: function(bluRay) {
				var blurRayView = new BluRayView({
					model: bluRay
				});

				this.$el.append(blurRayView.render().el);
			}
		});
		return bluRayListView;
	});