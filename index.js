var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index', {title: 'EJS Title', nav: [{Link:'Books', Text:'Books'}, {Link: 'Authors', Text: 'Authors'}]});
});

app.listen(port, function(err){
   console.log('Running server on port: ' + port);
});
