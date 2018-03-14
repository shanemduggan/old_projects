var app = app || {};

app.BookListView = Backbone.View.extend({
	el: ".bookBar",
	
	initialize: function( initialBooks ) {
		this.collection = new app.Library( initialBooks );
		this.render();
		this.listenTo( this.collection, 'add', this.renderBook );	
	},
	
	
	render: function() {
		this.collection.each(function (item) {
			this.renderBook( item );
		}, this)	
	},
	
	renderBook: function( item ) {
		var bookTitleView = new app.BookTitleView({
			model: item
		});
		
		this.$el.append( bookTitleView.render().el)
	}
});