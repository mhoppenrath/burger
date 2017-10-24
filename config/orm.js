var connection = require("./connection.js");


//helps make mySQL syntax
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSQL(ob) {
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}






//the exported object for SQL queiries
var orm = {
  //function to return all table entries
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //function to pu a single table entry in
  create: function( table, colm,vals, cb ) {
    //I make the code dumber but more reliabile
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += colm.toString();
    queryString += ") VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ")";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      cb(result);
    });
  },
  //updates a single entry
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSQL(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
