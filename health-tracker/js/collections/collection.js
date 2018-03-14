var app = app || {};

var FoodCollection = Backbone.Firebase.Collection.extend({
	model: FoodItem,
	url: "https://luminous-torch-5748.firebaseio.com/",
	
	byDate: function(date) {
		return _(this.filter(function(foodItem){
			return foodItem.get("date") === date;
		}))
	}
});

var foodCollection = new FoodCollection();