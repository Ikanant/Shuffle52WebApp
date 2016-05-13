var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;


var bookController = function(shuffleService){
    var url = 'mongodb://localhost:27017/shuffleHistory';

    var getDeckHistory = function (req, res) {


        mongodb.connect(url, function(err, db){
            var collection = db.collection('history');
            collection.find({}).toArray(
                function (err, results) {
                    res.render('history', {
                      history: results,
                    })
                }
            ); //We would put query inside {}
        });
    }

    var setNewDeck = function (req, res) {
      shuffleService.getRandomList(function(err, newDeck){
        mongodb.connect(url, function(err, db) {
          var collection = db.collection('history');

          console.log('->>');
          collection.insertOne({'cards': newDeck.numbers}, function(err, results){
              res.send('hello');
              db.close();
          });
        });
      });


    }

    return {
        getDeckHistory: getDeckHistory,
        setNewDeck: setNewDeck,
    }
}

module.exports = bookController;
