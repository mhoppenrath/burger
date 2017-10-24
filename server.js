var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


var app = express();
var port = process.env.PORT  || 3000;

app.use(express.static("public"));

app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes)

app.listen(port,function(req, res) {
  console.log("3000 is listening");
});
