var mongodb = require('mongodb').MongoClient;
var radixSort = require('radix-sort');

var shuffleController = function(shuffleService){
    var url = 'mongodb://pointsource:apple@ds023042.mlab.com:23042/shufflehistory';

    var getDeckHistory = function (req, res) {
        mongodb.connect(url, function(err, db){
            var collection = db.collection('history');
            collection.find({}).toArray(
                function (err, results) {
                    res.render('history', {
                      nav: 'history',
                      history: results,
                    })
                }
            ); //We would put query inside {}
        });
    }

    var generateDeck = function (req, res) {
      shuffleService.getRandomList(function(err, newDeck){
        mongodb.connect(url, function(err, db) {
          var collection = db.collection('history');
          collection.insertOne({'cards': newDeck.numbers}, function(err, results){
              res.render('newDeck', {
                nav: 'generateDeck',
                newDeck: newDeck.numbers,
              })
              db.close();
          });
        });
      })
    }

    // var setNewSortedDeck = function (req, res) {
    //   shuffleService.getRandomList(function(err, newDeck){
    //     mongodb.connect(url, function(err, db) {
    //       var collection = db.collection('history');
    //       var ascendingDeck = radixSort(newDeck.numbers);
    //       collection.insertOne({'cards': ascendingDeck}, function(err, results){
    //           res.render('newDeck', {
    //             nav: 'sorted',
    //             newDeck: ascendingDeck,
    //           })
    //           db.close();
    //       });
    //     });
    //   })

    return {
        getDeckHistory: getDeckHistory,
        generateDeck: generateDeck,
    }
}

module.exports = shuffleController;
