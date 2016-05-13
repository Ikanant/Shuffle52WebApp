var express = require('express');

var bookRouter = express.Router();

var router = function(){


    var shuffleController = require('../controllers/shuffleController')();
    bookRouter.route('/historyDeck').get(shuffleController.getDeckHistory);
    bookRouter.route('/newDeck').get(shuffleController.getDeckHistory);

    return bookRouter;
};

module.exports = router;
