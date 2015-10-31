//--------------
// DEPENDENCIES
//--------------

// Use Handlebars for templating
var hbs = require('hbs');

// Use body-parser for reading user (browser) input
var bodyParser = require('body-parser');

// Use express for routing
var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.use(express.static('public'));

//--------
// ROUTES
//--------

// Render index.html (home page)
app.get('/', function(req, res) {
  res.render('index');
  return;
});
