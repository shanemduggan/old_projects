'use strict';

(function() {

    var addButton = document.querySelector('#btn-submit');
    var cardGrid = document.getElementById("card-grid");
    var apiUrl = 'http://glendas-cards-shaneduggan.c9users.io/api/messages';
    var thanks = document.getElementById("thanks");


    function ajaxRequest(method, url, body, callback) {
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                callback(xmlhttp.response);
            }
        };

        xmlhttp.open(method, url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(body);
    }

    addButton.addEventListener('click', function() {

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var address = document.getElementById('address').value;
        var message = document.getElementById('message').value;
        var cardId = document.getElementById('cardId').value;
        //var body = "name=" + name;
        var body = "name=" + name + "&email=" + email + "&address=" + address + "&message=" + message + "&cardId=" + cardId;

        console.log(body);

        ajaxRequest('POST', apiUrl, body, function(data) {
            thanks.innerHTML = data;
            cardGrid.innerHTML = "";

            $('#myModal').modal('hide');

        });

    }, false);

})();
