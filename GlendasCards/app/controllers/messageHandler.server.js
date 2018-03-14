'use strict';

function messageHandler(db) {
    var messages = db.collection('messages');
    var cards = db.collection('cards');

    this.addMessage = function(req, res) {
        console.log(req.body);

        messages.insert({
                card_id: parseInt(req.body.cardId),
                person: {
                    name: req.body.name,
                    email: req.body.email,
                    address: req.body.address
                },
                message: req.body.message
            },
            function(err, result) {

                if (err) {
                    throw err;
                }

                cards.find({id: parseInt(req.body.cardId)}).toArray(function(err, result) {
                    console.log(result);
                });

                cards.update({
                    id: parseInt(req.body.cardId)
                }, {
                    $set: {
                        submitted: true
                    }
                });

                var responseString = "Thanks " + req.body.name + ", Glenda is going to love it!";
                res.send(responseString);
            });



    };

}

module.exports = messageHandler;
