var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


var app = express();
var port = 3000;

app.use(express.static("public"));

app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "movies_db"
});


app.listen(port);
