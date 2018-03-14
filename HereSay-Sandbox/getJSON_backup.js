 $.getJSON('yelpData.json', function(data) {
        var output="<ul>";
        for (var i in data) {
            output+="<li><a href='http://yelp.com" + data[i].url + "'>" + data[i].text + "</a></li>";
        }

        output+="</ul>";
        document.getElementById("event-title").innerHTML=output;
  });