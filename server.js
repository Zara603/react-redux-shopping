var express = require('express');
var exphbs  = require('express-handlebars');
var request = require('request');

var app = express();
var apiUrl = 'http://your-project-url.vm';

app.set('views', __dirname + '/static');

app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: 'static/layouts',
  partialsDir: 'static/partials'
}));

app.set('view engine', '.hbs');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/home', function (req, res) {
  var ringsMockData = JSON.stringify(require('./public/js/data/rings.json'));

  res.render('home', { INITIAL_STATE: ringsMockData });
});

app.get('/data/*', function(req, res) {
  req.pipe(request.get({
    uri: apiUrl + req.url,
    headers: { 'content-type': 'application/json' }
  })).pipe(res);
});

app.listen(3000);
