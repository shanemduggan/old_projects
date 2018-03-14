'use strict';

var CardHandler = require(process.cwd() + '/app/controllers/cardHandler.server.js');
var MessageHandler = require(process.cwd() + '/app/controllers/messageHandler.server.js');

module.exports = function (app, db) {
   var cardHandler = new CardHandler(db);
   var messageHandler = new MessageHandler(db);

   app.route('/')
      .get(function (req, res) {
         res.sendFile(process.cwd() + '/public/index.html');
      });

   app.route('/api/messages')
      .post(messageHandler.addMessage)

    app.route('/api/cards')
        .get(cardHandler.getCards)
};
