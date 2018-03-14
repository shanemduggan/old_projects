// GET https://api.twitter.com/1.1/trends/place.json?id=1

$.get(
    //"https://api.twitter.com/1.1/trends/place.json?id=1",
    "https://api.twitter.com/1.1/trends/available.json",
    //{paramOne : 1},
    function(data) {
    	console.log(data);
       alert('page content: ' + data);
    }
);

// var xhrObject = new XMLHttpRequest();
// 
// xhrObject.onreadystatechange = function() {
	// if (xhrObject.readyState === 4) {
		// if (xhrObject.status === 200 || xhrObject.status === 304) {
// 
			// console.log(xhrObject.responseText);
			// document.body.innerHTML = xhrObject.responseText;
// 
		// }
	// }
// };

//xhrObject.open("GET", "https://api.twitter.com/1.1/trends/place.json?id=1", true);
//  https://api.twitter.com/1.1/trends/available.json
//xhrObject.open("GET", "https://api.twitter.com/1.1/trends/available.json", true);
//xhrObject.send();

// $('.text').text('loading . . .');
//

// $.ajax({
// type : "GET",
// //url:"https://api.meetup.com/2/cities",
// url : 'https://api.twitter.com/1.1/trends/place.json?id=1',
// success : function(data) {
// console.log(data);
// //$('.text').text(JSON.stringify(data));
// },
// dataType : 'jsonp',
// }); 