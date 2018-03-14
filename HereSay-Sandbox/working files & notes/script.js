$.getJSON('data.json', function(data) {
        var output="<ul>";
        for (var i in data.event) {
            output+="<li>" + data.event[i].title + "</li>";
        }

        output+="</ul>";
        document.getElementById("event-list").innerHTML=output;
  });
