// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controllers');
app.use('/', router);

// Timeout
// app.use(timeout(15000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
    if (!req.timedout) next();
}





app.listen(PORT, function() 
{
  console.log("App listening on PORT " + PORT);
});