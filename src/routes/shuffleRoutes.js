var express = require('express');

var bookRouter = express.Router();

var router = function(){

    var bookService = require('../services/shuffleService')();
    var shuffleController = require('../controllers/shuffleController')(bookService);

    bookRouter.route('/historyDeck').get(shuffleController.getDeckHistory);
    bookRouter.route('/generateDeck').get(shuffleController.generateDeck);
    //bookRouter.route('/newUnsortedDeck').get(shuffleController.setNewUnsortedDeck);

    return bookRouter;
};

module.exports = router;
