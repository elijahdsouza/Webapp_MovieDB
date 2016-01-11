define(
	[
		'backbone',
		'models/bluRay',
		'Constants'
	],
	function(Backbone, bluRay, Constants) {
		'use strict';

		var bluRayLibrary = Backbone.Collection.extend({
			url: Constants.API_ROOT + '/brlist',

			model: bluRay			
		});

		return bluRayLibrary;
	});