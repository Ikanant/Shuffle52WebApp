var express = require('express');
var app = express();

var shuffleRouter = require('./src/routes/shuffleRoutes')();

var port = process.env.PORT || 5000;

app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/Shuffle', shuffleRouter);

app.get('/', function(req, res){
    res.render('index',
      { nav: 'index'}
    );
});

app.listen(port, function(err){
   console.log('Running server on port: ' + port);
});
