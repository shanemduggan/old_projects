var app = app || {};

var DATE = new Date();
var FORMATTEDDATE = (DATE.getMonth() + 1 + "/" + DATE.getDate() + "/" + DATE.getFullYear());

var FoodItemView = Backbone.View.extend({
	tagName: "li",
	template: _.template( $('#foodTemplate').html()),
	
	events: {
		"click button.libut": "destroy"
	},
	
	destroy: function() {
		this.remove();
		this.model.destroy();
		
		$("#new-food").focus();
	},
	
	render: function() {
		if (this.model.get('date') === $(".gldate").val()) {
			this.$el.html(this.template(this.model.attributes));
		}
		return this;
	}
	
});