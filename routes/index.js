//Create route for requests
var express = require('express');
var router = express.Router();

//Get home
router.get('/', function(req, res){
  res.render('index', {
    title: "Home"
  });
});
router.get('/director_statement', function(req, res){
  res.render('./pages/director_statement', {
    title: "Director's Statement"
  });
});
router.get('/synopsis', function(req, res){
  res.render('./pages/synopsis', {
    title: "Plot Synopsis"
  });
});

module.exports = router;
