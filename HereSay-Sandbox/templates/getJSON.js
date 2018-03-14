$.getJSON('eventData.json', function(data) {
        var output="<ul>";
        for (var i in data) {
            output+="<li><a href='" + data[i].url + "'>" + data[i].text + "</a></li>";
        }

        output+="</ul>";
        document.getElementById("event-title").innerHTML=output;
  });
  


 
 
/* var url1 = 'conciergeData.json';
var url2 = 'chamberData.json';

$.when(
    $.getJSON(url1),
    $.getJSON(url2)
).done(function(result1, result2) {
        var output="<ul>";
        for (var i in data) {
            output+="<li><a href='" + data[i].url + "'>" + data[i].text + "</a></li>";
        }

        output+="</ul>";
        document.getElementById("event-title").innerHTML=output;
  });
  */