/**
 * Timeline of when your friends joined Twitter
 * Jon Bulava
 * @jbulava
 */

// Initialize the app
var express = require('express');
var app = express();
var _ = require('underscore');
var expressHbs = require('express-handlebars');

app.engine('handlebars', expressHbs({
	defaultLayout : 'main'
}));
app.set('view engine', 'handlebars');

// Initialize the Twitter client
var Twitter = require('twit');
var config = require('./config');
var twitter = new Twitter(config);

// Start the server
var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});

// Get the user IDs of 100 friends
function getFriends(next) {
	twitter.get('trends/available', function(err, data) {

		// If we have the IDs, we can look up user information
		if (!err && data) {
			//lookupUsers(data.ids, next);
			//console.log(data);
			console.log(data.length);

			// placeType.name
			// Town, Unknown, Country
			var trendCountries = _.filter(data, function(obj) {
				return obj.placeType.name == 'Country';
			});
			console.log(trendCountries);
			console.log(trendCountries.length);
			//next(err, trendCountries);

			// New Zealand, United Kingdom, United States

			var UStrend = _.filter(trendCountries, function(obj) {
				return obj.country == 'United States';
			});

			var UKtrend = _.filter(trendCountries, function(obj) {
				return obj.country == 'United Kingdom';
			});

			var NZtrend = _.filter(trendCountries, function(obj) {
				return obj.country == 'New Zealand';
			});

			var countries = UStrend.concat(UKtrend);
			var allCountries = countries.concat(NZtrend);

			lookupUsers(allCountries[0], next);
		}

		// Otherwise, return with error
		else {
			next(err);
		}
	});
}

// Get user information for the array of user IDs provided
function lookupUsers(countryCodes, next) {
	// twitter.get('users/lookup', {
	// user_id : user_ids.join()
	twitter.get('trends/place', {
		id : countryCodes.woeid
	}, function(err, data) {

		// If we have user information, we can pass it along to render
		if (!err && data) {
			console.log(data[0].trends);
			console.log(data[0].trends[0]);

			var tweetNumbers = [];
			var trends = data[0].trends;
			trends.forEach(function(trend) {
				if (trend.tweet_volume)
					tweetNumbers.push(trend.tweet_volume);
			});

			console.log(tweetNumbers);

			// Copy the values, rather than operating on references to existing values
			var values = tweetNumbers.concat();

			// Then sort
			values.sort(function(a, b) {
				return a - b;
			});

			/* Then find a generous IQR. This is generous because if (values.length / 4)
			 * is not an int, then really you should average the two elements on either
			 * side to find q1.
			 */
			var q1 = values[Math.floor((values.length / 4))];
			var q3 = values[Math.ceil((values.length * (3 / 4)))];
			var iqr = q3 - q1;
			var maxValue = q3 + iqr * 1.5;	
			var filteredValues = values.filter(function(x) {
				return (x >= maxValue);
			});

			console.log(filteredValues);
			var trendingTags = _.find(trends, function(trend){ return trend.tweet_volume == filteredValues[0]; });
			console.log(trendingTags);

			// We'll fill this array with the friend data you need
			//var friends_array = new Array();

			//for (index in data) {

			// Get your friend's join date and do some leading zero magic
			// var date = new Date(data[index].created_at);
			// var date_str = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
			//
			// // Push the info to an array
			// friends_array.push({
			// 'name' : data[index].name,
			// 'screen_name' : data[index].screen_name,
			// 'created_at' : date_str,
			// 'profile_image' : data[index].profile_image_url,
			// 'link_color' : data[index].profile_link_color
			// });
			//}

			// The callback function defined in the getFriends call
			//next(err, friends_array);
			
			
			
			// TO DO:
			// get missing tweet volume
			

		}

		// Otherwise, return with error
		else {
			next(err);
		}
	});
}

// This is the route for our index page
app.get('/', function(req, res) {
	console.log('starting');
	// Calling the function defined above to get friend information
	getFriends(function(err, data) {
		// Render the page with our Twitter data
		if (!err && data) {
			res.render('index', {
				countries : data
			});
		}

		// Otherwise, render an error page
		else {
			res.send('Something went wrong :(\n' + err.message);
		}
	});

});
