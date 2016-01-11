define(
	[
		'jquery',
		'underscore',
		'backbone',
		'js/collections/Library',
		'js/views/itemListView'
	],
	function($, _, Backbone, Library, ItemListView) {

		var App = Backbone.View.extend({
			el: '#app',

			template: _.template($('#app-template').html()),

			initialize: function() {
				this.$el.html(this.template());
				var library = new Library();
				

				this.itemListView = new ItemListView({
					collection: library
				});

				library.fetch();
			},

			render: function() {
				//this.$el.html(this.template());
				this.$el.html(this.template());
				//this.$el.html("<div>Hello eli</div>");
				this.itemListView.render();
				return this;
			}
		});

		return App;
	});