var express = require('express'),
    path = require('path'),
    ejs = require('ejs'),
    routes = require('./routes/index');
var app = express();


//Define the port to run on
app.set('port', 3000);

//Define the view engine to use
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//Indicate routes
app.use('/', routes);

//Indicate the area for static files
app.use(express.static(path.join(__dirname, '/public')));

//Indicate location of Materialize
app.use('/materialize', express.static(__dirname + '/node_modules/materialize-css/dist'));

//Listen for requests
app.listen(3000);
console.log('Magic happens on port %d!', 3000);
/*var server = app.listen(app.get('port'), function(){
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});*/
