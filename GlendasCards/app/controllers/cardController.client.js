'use strict';

(function() {

    var apiUrl = 'http://glendas-cards-shaneduggan.c9users.io/api/cards';
    var cardGrid = document.getElementById("card-grid");

    function ready(fn) {
        if (typeof fn !== 'function') {
            return;
        }

        if (document.readyState === 'complete') {
            return fn();
        }

        document.addEventListener('DOMContentLoaded', fn, false);
    }


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

    function fillCardGrid (data) {
        var cardList = JSON.parse(data);
        var inner = "hello";
        console.log(cardList);
        cardList.forEach( function(element, index, array) {
            inner = '<div class="card" data-toggle="modal" data-target="#myModal" data-cardid="'+ element.id +'"><img id="card' + element.id + '" src="' + element.url + '"></div>';
            cardGrid.innerHTML += inner;
        });

    }

    ready(ajaxRequest('GET', apiUrl, null, fillCardGrid));

    $('#myModal').on('show.bs.modal', function (event) {
      var card = $(event.relatedTarget) // Button that triggered the modal
      var card_id = card.data('cardid') // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this)
      modal.find('.modal-title').text('You picked card #' + card_id + '!!!')
      modal.find('#cardId').val(card_id)
    })

})();
