var http = require('http');

var shuffleService = function() {
    var getRandomList = function(cb){
      var url = 'http://applicant.pointsource.us/api/random/5734dc1c7e3d61136595a0d9?min=1&max=10&num=5';

      http.get(url, function(res){
        var body = '';
        res.on('data', function(chunk){
            body += chunk;
        });

        res.on('end', function(){
            var jsonResponse = JSON.parse(body);
            cb(null, jsonResponse);
        });
      }).on('error', function(e){
          console.log("Got an error: ", e);
      });
    }

    return {
        getRandomList: getRandomList,
    }
}

module.exports = shuffleService;
