var express = require("express");
var Burgers = require("../models/burger.js");
var router = express.Router();

router.get('/', function(req,res){
  Burgers.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      res.render('index',hbsObject);
  });
});

router.post('/burgers', function(req,res) {
  Burgers.create([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

router.put('/burgers/:id', function(req,res) {
  var condition = "id = " +req.params.id;

  Burgers.update({
    devoured: true
  }, condition, function (data) {
    res.redirect('/');
  });
});


module.exports = router;
