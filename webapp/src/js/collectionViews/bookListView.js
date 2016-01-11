define(
	[
		'jquery',
		'underscore',
		'backbone',
		'views/bookView',
		'collections/bookLibrary'
	],
	function($, _, Backbone, BookView, BookLibrary) {

		var bookListView = Backbone.View.extend({
			el: '#library',

			className: 'container',

			template: _.template($('#library-template').html()),

			initialize: function() {
				this.collection = new BookLibrary();
				this.collection.bind('reset', this.render, this);
				this.collection.fetch({
					reset: true
				});
			},

			events: {
				'#category change': function() {
					debugger
					// change  the 
				}
			},

			render: function() {
				this.$el.html(this.template());

				var self = this;
				_.each(this.collection.models, function(book) {
					self.renderBooks(book);
				}, this);

				return this;
			},

			renderBooks: function(book) {
				var bookView = new BookView({
					model: book
				});

				this.$el.append(bookView.render().el);
			}
		});
		return bookListView;
	});