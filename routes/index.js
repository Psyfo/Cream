//Create route for requests
var express = require('express');
var router = express.Router();

//Image routes
var ayianna_pic = "/img/Bios/ayianna.jpg";
var bob_pic = "/img/Bios/bob.jpg";
var bruce_pic = "/img/Bios/bruce.jpg";
var don_pic = "/img/Bios/don.jpeg";
var evan_pic = "/img/Bios/evan.jpg";
var jen_pic = "/img/Bios/jen.jpg";
var kacie_pic ="/img/Bios/kacie.jpg";
var hale_pic = "/img/Bios/office_hale.jpg";
var palesa_pic = "/img/Bios/palesa.jpg";
var palesa_pic2 = "/img/Bios/palesa2.jpg";
var palesa_pic3 = "/img/Bios/palesa3.jpg";
var rodrigo_pic = "/img/Bios/rodrigo.jpg";
var rodrigo_pic2 = "/img/Bios/rodrigo2.png";
var grandma_pic = "/img/Bios/grandma.jpeg";
var joy_pic = "/img/Bios/joy.jpeg";
var tiana_pic = "/img/Bios/tiana.jpeg";
var award_pic = "/img/award.jpg";

//Get home
router.get('/', function(req, res){
  res.render('index', {
    title: "Cream"
  });
});
router.get('/director_statement', function(req, res){
  res.render('./pages/director_statement', {
    title: "Director's Statement",
    palesa_pic: palesa_pic
  });
});
router.get('/synopsis', function(req, res){
  res.render('./pages/synopsis', {
    title: "Plot Synopsis"
  });
});
router.get('/cast_crew', function(req, res){
  res.render('./pages/cast_crew', {
    title: "Cast & Crew",
    ayianna_pic: ayianna_pic,
    bob_pic: bob_pic,
    bruce_pic: bruce_pic,
    don_pic: don_pic,
    evan_pic: evan_pic,
    jen_pic: jen_pic,
    kacie_pic: kacie_pic,
    hale_pic: hale_pic,
    palesa_pic: palesa_pic,
    palesa_pic2: palesa_pic2,
    rodrigo_pic: rodrigo_pic,
    grandma_pic: grandma_pic,
    joy_pic: joy_pic,
    tiana_pic: tiana_pic
  });
});
router.get('/bio_ayianna', function(req, res){
  res.render('./pages/bio_ayianna', {
    title: "Ayianna Madison",
    ayianna_pic: ayianna_pic
  });
});
router.get('/bio_jen', function(req, res){
  res.render('./pages/bio_jen', {
    title: "Jen H. Conrad",
    jen_pic: jen_pic
  });
});
router.get('/bio_kacie', function(req, res){
  res.render('./pages/bio_kacie', {
    title: "Kacie Rogers",
    kacie_pic: kacie_pic
  });
});
router.get('/bio_bob', function(req, res){
  res.render('./pages/bio_bob', {
    title: "Bob Streit",
    bob_pic: bob_pic
  });
});
router.get('/bio_bruce', function(req, res){
  res.render('./pages/bio_bruce', {
    title: "Bruce Lemon Jr",
    bruce_pic: bruce_pic
  });
});
router.get('/bio_don', function(req, res){
  res.render('./pages/bio_don', {
    title: "Don Schlossman",
    don_pic: don_pic
  });
});
router.get('/bio_evan', function(req, res){
  res.render('./pages/bio_evan', {
    title: "Evan Michael",
    evan_pic: evan_pic
  });
});
router.get('/bio_palesa', function(req, res){
  res.render('./pages/bio_palesa', {
    title: "Palesa Lebona",
    palesa_pic3: palesa_pic3
  });
});
router.get('/bio_rodrigo', function(req, res){
  res.render('./pages/bio_rodrigo', {
    title: "Rodrigo Zan",
    rodrigo_pic2: rodrigo_pic2
  });
});
router.get('/press_awards', function(req, res){
  res.render('./pages/press_awards', {
    title: "Press & Awards",
    award_pic: award_pic
  });
});



module.exports = router;
