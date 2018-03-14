$(document).ready(function() {
    $("#event-list").click(function() {
        $.ajax({
            url : "data.txt",
            dataType: "text",
            success : function (data) {
                $("#event-list").html(data);
            }
        });
    });
}); 
 


// $.getJSON('/url/to/php.php', function(data) {
    // console.log(data);
    // generate graph from data
// });

//http://stackoverflow.com/questions/11589387/load-txt-file-using-jquery-or-ajax //



$.getJSON('data.txt', function(data) {
		var output="<ul>";
        for (var i in data.event) {
			output+="<li>" + data.event[i].title + "</li>";
       }

       output+="</ul>";
       document.getElementById("event-list").innerHTML=output;
 });