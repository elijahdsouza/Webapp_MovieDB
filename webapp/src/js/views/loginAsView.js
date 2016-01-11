define(
	[
		'jquery',
		'underscore',
		'backbone'
	],
	function($, _, Backbone) {

		var loginAsView = Backbone.View.extend({
			className: 'book-item',

			el: '#logged-in-as',

			template: _.template(
				'<ul class="nav navbar-nav navbar-right">\
			      <li class="logged-in-as"><a>Logged in as: <b><%= username %></b></a></li>\
			      <li class="logged-in-as"><button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Login</button></li>\
			     </ul>'
			),
			initialize: function() {
				var self = this;
				this.model.on('change', function() {
					self.render();
				});
			},
			render: function() {
				this.$el.html(this.template(this.model.toJSON()));
				return this;
			}
		});
		return loginAsView;
	});