define(
	[
		'backbone',
		'models/book',
		'Constants'
	],
	function(Backbone, book, Constants) {
		'use strict';

		var bookLibrary = Backbone.Collection.extend({
			url: Constants.API_ROOT + '/booklist',

			model: book			
		});

		return bookLibrary;
	});