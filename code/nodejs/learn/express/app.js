var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('default', {title: 'Home Title'});
});

app.get('/me', function(req, res) {
  res.send('<b>Hello</b> me');
});

app.get('/who/:name?', function(req, res) {
  var name = req.params.name;
  res.send(name +' was here');
});

app.get('/who/:name?/:title?', function(req, res) {
  var name = req.params.name;
  var title = req.params.title;
  res.send('Name: '+name +'<br/>Title: '+title);
});

app.get('*', function(req, res) {
  res.send('Wrong route');
});


var server = app.listen(1234, function() {
  console.log('Listening on 1234');
});

