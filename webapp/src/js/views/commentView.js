define(
	[
		'jquery',
		'underscore',
		'backbone',
		'Constants'
	],
	function($, _, Backbone, Constants) {

		var commentView = Backbone.View.extend({
			className: 'comment',

			el: '#comments',

			template: _.template($('#comment-template').html()),

			events: {
				'click #post-comment': 'postComment',

				'keypress #comment-name': function(e) {
					if (e.which === 13) {
						this.postComment();
					}
				}
			},
			render: function() {
				var self = this;
				this.getComments().done(function(data) {
					self.$el.html(self.template({
						Html: data
					}));
				});
				
				return this;
			},

			getComments: function() {
				return $.get(Constants.API_ROOT + '/htmlComments');
			},

			postComment: function() {
				var name = this.$el.find('#comment-name').val().trim();
				var comment = this.$el.find('#comment-textarea').val().trim();

				if (name != '' && comment != '') {
					var self = this;
					var xhr = new XMLHttpRequest();
					xhr.open("POST", Constants.API_ROOT + '/comment?name=' + name, true);
					xhr.setRequestHeader("Content-Type", "application/json");

					xhr.onload = function() {
						self.$el.find('#comment-name').val('');
						self.$el.find('#comment-textarea').val('');
						self.render();
					}
					xhr.send("\"" + comment + "\"");
				}
			}
			
		});
			$("a").click(function(){
			        $(this).hide(1000);
			});
		return commentView;
	});