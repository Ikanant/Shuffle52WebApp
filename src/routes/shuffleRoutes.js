var express = require('express');

var bookRouter = express.Router();

var router = function(){

    var bookService = require('../services/shuffleService')();
    var shuffleController = require('../controllers/shuffleController')(bookService);

    bookRouter.route('/historyDeck').get(shuffleController.getDeckHistory);
    bookRouter.route('/newDeck').get(shuffleController.setNewDeck);

    return bookRouter;
};

module.exports = router;
