$(document).ready(function() {
    
    $.getJSON('data.json', function(data) {
        // Do something with data from URL get request
        var htmlString = "";                 // I use string concatenation in order to create a bunch of list item nodes here
        $.each(data[0], function(key, value) {  // each is a shortcut that takes 2 values, first is the array index (key in this case)
                                                // the JSON object. 
            htmlString += '<li>' + value.title + '</li>'; // Use dot syntax to get the value of the object's properties
        });
    });
    $('.event-list').html(htmlString); //insert the html into .event-list - add a class to your ul in order to make sure that it gets added turthat 
                                    // class alone.
}); 



------------

$(document).ready(function(){
    $.getJSON("data.json", function(data){
		var items = [];
        $.each(data, function(key, value){
			items.push( "<li id='" + key + "'>" + val + "</li>");
		});
		$( "<ul/>", {
			"class": "event-list", html: items.join( "")}).appendTo( "body" );
    });
}); 

-----------------------

$(document).ready(function() {
	$.getJSON( "data.json", function( data ) {
		var items = [];
		$.each( data, function( key, val ) {
			items.push( "<li id='" + key + "'>" + val + "</li>");
		});
	});
});