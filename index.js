var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 5000;

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var shuffleRouter = require('./src/routes/shuffleRoutes')();
app.use('/Shuffle', shuffleRouter);

app.get('/', function(req, res){
    res.render('index', { nav: 'index'});
});

app.listen(port, function(err){
   console.log('Running server on port: ' + port);
});
