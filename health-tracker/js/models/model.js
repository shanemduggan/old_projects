var app = app || {};

var FoodItem = Backbone.Model.extend({
	defaults: {
		date: 0,
		food: "food",
		servings: 0,
		calories: 0
	}
});