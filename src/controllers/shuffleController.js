var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;


var bookController = function(){
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

        mongodb.connect(url, function(err, db) {
            var collection = db.collection('history');

                collection.insertMany(books, function(err, results){
                    res.send(results);
                    db.close();
                });
        });
    }

    return {
        getDeckHistory: getDeckHistory,
        setNewDeck: setNewDeck,
    }
}

module.exports = bookController;
