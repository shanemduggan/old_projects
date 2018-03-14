var app = app || {};

var AppView = Backbone.View.extend({
	el: $("#foodapp"),
	collection: foodCollection,
	events: {
		"click button#add-food": "createFood",
		"click button#reset": "reset",
		"keyup #new-food": "autoComplete"
	},
	
	initialize: function() {
		var that = this;
		this.list = $("#food-list");
        this.input = $("#new-food");
        this.servings = $("#servings");
        this.calories = $("#calories");
        this.glDate = $(".gldate");
        this.input.focus();
		

        this.listenTo(this.collection, 'sync', this.totalCal);
        this.listenTo(this.collection, 'add', this.addOne);
        this.listenTo(this.collection, 'remove', this.totalCal);

        $(".gldate").glDatePicker({
            onClick: (function(el, cell, date, data) {
                el.val(date.toLocaleDateString());
                that.filter();
            }),
        });
		
		$(".gldate").val(FORMATTEDDATE);
	},
	
	addOne: function(FoodItem) {
		var view = new FoodItemView({
			model: FoodItem
		});
		
		this.list.append(view.render().el);
		this.totalCal();
	},
	
	createFood: function() {
		if (!this.input.val() || !this.servings.val()) {
			alert("please enter all required fields");
			return;
		}
		
		this.collection.create({
			date: this.glDate.val(),
			food: this.input.val(),
			servings: $("#servings").val(),
			calories: (Math.round($("#calories").val()) * $("#servings").val())
		});
		
		this.input.val('');
		this.servings.val('');
		this.calories.val('');	
	},
	
	autoComplete: function(e) {
		if (e.keyCode === 13) {
			this.createFood();
		} else if (e.keyCode === 27) {
			$("#autocomplete").html("");
		} else {
			if (this.input.val()) {
				var query = (this.input.val()).replace(" ", "%20");
				$.get("https://api.nutritionix.com/v1_1/search/" + query + "?results=0%3A9&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=6bbb9016&appKey=507949195a808f31baab3b44b6aab429",
					function(data) {
						//console.log(data);
						$("#autocomplete").html("");
						
						if (data.length !== 0) {
							for (var i = 0; i < data.hits.length; i++) {
								$("#autocomplete").append("<li class='autoCompLi' id=" + i + ">" + (data.hits[i].fields.item_name) + ", by " + (data.hits[i].fields.brand_name) + "</li><br>");
							}
							
                            $("#autocomplete").click(function(e) {
                                $("#new-food").val(e.target.innerText);
                                $.get("https://api.nutritionix.com/v1_1/item?id=" + data.hits[e.target.id]._id + "&appId=6bbb9016&appKey=507949195a808f31baab3b44b6aab429",
                                    function(itemData) {
                                        var itemCals = (itemData.nf_calories);
                                        $("#calories").val(itemCals);    
                                    }).fail(function() {
                                    $("#calories").val("No Calories Retrieved; please enter manually");
                                });
                                $("#autocomplete").html("");
                            });
                        }
                    }).fail(function() {
                    $("#autocomplete").html("");
                });
            } else {
                $("#autocomplete").html("");
            }
        }
	},
	
	reset: function() {
		if (confirm("Clicking OK will reset database")) {
			
			this.collection.reset();
			this.list.html("");
			this.input.focus();
		} else {
			return;
		}
	},
	
	filter: function(e) {
		var displayDate = $(".gldate").val();
		this.rerender(this.collection.byDate(displayDate));
	},
	
	rerender: function(items) {
		$("#food-list").html("");
		
		items.each(function(foodItem) {
			var newView = new FoodItemView({
				model: foodItem,
				collection: this.collection
			});
			$("#food-list").append(newView.render().el);
		});
		this.totalCal();
		return this;
	},
	
	totalCal: function() {
		var calTotal = 0;
		$('.DOMcals').each(function() {
			calTotal += parseFloat($(this).text());
		});
		$(".todaysDate").text($(".gldate").val());
		$(".calTotal").text(calTotal);
	}
});