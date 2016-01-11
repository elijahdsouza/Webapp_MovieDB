define(
	[
		'jquery',
		'underscore',
		'backbone'
	],
	function($, _, Backbone) {

		var loginView = Backbone.View.extend({
			className: 'book-item',

			el: '#modal-container',

			template: _.template(
				'<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">\
			      <div class="modal-dialog" role="document">\
			        <div class="modal-content">\
			          <div class="modal-header">\
			            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
			            <h4 class="modal-title" id="myModalLabel">Modal title</h4>\
			        </div>\
			        <div class="modal-body">\
			        <dl class="dl-horizontal">\
					  <dt>Username:</dt>\
					  <dd><input id="login-username" type="text" class="form-control" placeholder="Username..."></dd>\
					</dl>\
			        <dl class="dl-horizontal">\
					  <dt>Password:</dt>\
					  <dd><input id="login-password" type="password" class="form-control" placeholder="Password..."></dd>\
					</dl>\
			        <dl class="dl-horizontal">\
					  <dt>Address:</dt>\
					  <dd><textarea id="login-address" class="form-control" rows="3" placeholder="Address..."></textarea></dd>\
					</dl>\
			        </div>\
			        <div class="modal-footer">\
			            <button id="login-close" type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
			            <button id="login-register" type="button" class="btn btn-primary">Register</button>\
			        </div>\
			    </div>'
			),

			events: {
				'click #login-register': function() {
					this.model.set({
						Address: this.$el.find('#login-address').val(),
						Name: this.$el.find('#login-username').val(),
						Password: this.$el.find('#login-password').val()
					});
					var self = this;
					this.model.save().done(function() {
						self.$el.find('#login-close').click();
					});
				}
			},

			render: function() {
				this.$el.html(this.template(this.model.toJSON()));
				return this;
			}
		});

		return loginView;
	});