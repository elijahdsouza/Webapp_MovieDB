define(
	[
		'jquery',
		'underscore',
		'backbone',
		'collectionViews/bookListView',
		'collectionViews/bluRayListView',
		'views/commentView',
		'models/login',
		'views/loginView',
		'views/loginAsView',
		'Constants'
	],
	function($, _, Backbone, BookListView, BluRayListView, CommentView, Login, LoginView, LoggedAs, Constants) {

		'use strict';
		
		var appView = Backbone.View.extend({
			el: '#app',

			template: _.template($('#app-template').html()),

			initialize: function() {},

			events: {
				'change #search-library': function(event) {
					var searchTerm = event.target.value;
					this.search(searchTerm);
				},

				'click #search': function() {
					var searchTerm = this.$el.find('#search-library').val();
					this.search(searchTerm);
				},

				'click #clear-text': function() {
					this.$el.find('#search-library').val('');
					this.search('');
				},

				'change select': function(event) {
					var val = event.target.value;
					this.setCategory(val);
				},
			},

			render: function() {
				var self = this;
				this.$el.html(this.template());
				this.renderCategoryChooser();

				var commentView = new CommentView();
				commentView.render();

				var login = new Login();
				var loginView = new LoginView({
					model: login
				});
				loginView.render();

				var loggedAsView = new LoggedAs({
					model: login
				});

				loggedAsView.render();
				
				return this;
			},
			renderCategoryChooser: function() {
				this.categoryChooser = this.$el.find('select');
				this.categoryChooser.selectpicker();
				this.setCategory(this.getCategoryId());
			},
			setCategory: function(value) {
				console.log(value);
				if (value === '2') {
					this.itemListView = new BluRayListView();
				} else {
					this.itemListView = new BookListView();
				}
			},
			getCategoryId: function() {
				return this.categoryChooser.val();
			},
			search: function(searchTerm) {
				var collection = this.itemListView.collection;

				if (this.getCategoryId() === '2') {
					collection.url = Constants.API_ROOT + '/brsearch?term=' + searchTerm;
				} else {
					collection.url = Constants.API_ROOT + '/booksearch?term=' + searchTerm;
				}
				collection.fetch({
					reset: true
				});
			}
		});

		return appView;
	});;