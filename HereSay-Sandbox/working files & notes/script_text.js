// $(document).ready(function(){
//    $("button").click(function(){
//        $("#div1").load("data.txt");
//    });
// });

// $(document).ready(function(){
//	    $("#event-list").load("data.txt");
// });


/* var dt = $.get("data.txt", function (data) {
        dt = data;
	
    }); */


	
$(document).ready(function(data) {
	$("#event-list").load("data.txt");
    var output="<ul>";
    for (var i in data) {
			output+="<li>" + data[i] + "</li>";
       }

       output+="</ul>";
       document.getElementById("event-list").innerHTML=output;
	
});
	
/*
$(document).ready(function(data) {
	$.load("data.txt", function( data ) {
    var output="<ul>";
    for (var i in data) {
			output+="<li>" + data[i] + "</li>";
       }

       output+="</ul>";
       document.getElementById("event-list").innerHTML=output;
	
	});
});
*/
	
/*$(document).ready(function(){
		var output="<ul>";
        for (var i in dt) {
			output+="<li>" + dt[i] + "</li>";
       }

       output+="</ul>";
       document.getElementById("event-list").innerHTML=output;
});

/* $.get('data.txt', function (data) {
    data = $(data);
    	var output="<ul>";
        for (var i in data.event) {
			output+="<li>" + data.event[i].title + "</li>";
       }

       output+="</ul>";
       document.getElementById("event-list").innerHTML=output;
});
});

$(document).ready(function(){
	    var data = .load("data.txt");
		var output="<ul>";
        for (var i in data.event) {
			output+="<li>" + data.event[i].title + "</li>";
       }

       output+="</ul>";
       document.getElementById("event-list").innerHTML=output;
});


$("event-list").ready(function(){
    $.get("data.txt", function(data){
        alert("Data: " + data);
    });
});


$.getJSON('data.txt', function(data) {
		var output="<ul>";
        for (var i in data.event) {
			output+="<li>" + data.event[i].title + "</li>";
       }

       output+="</ul>";
       document.getElementById("event-list").innerHTML=output;
 });
 */
 