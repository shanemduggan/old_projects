'use strict';

function cardHandler(db) {
    var cards = db.collection('cards');

    this.getCards = function(req, res) {

        cards.find({"submitted": false}).toArray( function(err, result) {
            if (err) {
                throw err;
            }

            res.json(result);

        });

    };

}

module.exports = cardHandler;
