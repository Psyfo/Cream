//Create route for requests
var express = require('express');
var router = express.Router();

//Get home
router.get('/', function(req, res){
  res.render('index', {
    title: "Home"
  });
});

module.exports = router;