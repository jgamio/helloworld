var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var uppercase = req.query.uppercase;
  var reversed = req.query.reversed

  var textPlain = 'hello world';
 
  if (reversed == 'true') {
    
    textPlain = 'dlrow olleh';
  }
      
  if (uppercase == 'true') {

    textPlain = textPlain.toUpperCase();
  }

  res.format({
    'text/plain': function(){
      res.send(textPlain);
    }
  });


});

/* GET home page. */
router.get('/hello', function(req, res, next) {
  //res.render('index', { title: 'Express' });

  var uppercase = req.query.uppercase;
  var reversed = req.query.reversed

  var textPlain = 'hello';
 
  if (reversed == 'true') {
    
    textPlain = 'olleh';
  }
      
  if (uppercase == 'true') {

    textPlain = textPlain.toUpperCase();
  }

  res.format({
    'text/plain': function(){
      res.send(textPlain);
    }
  });



});

/* GET home page. */
router.get('/world', function(req, res, next) {
  //res.render('index', { title: 'Express' });

  var uppercase = req.query.uppercase;
  var reversed = req.query.reversed

  var textPlain = 'world';
 
  if (reversed == 'true') {
    
    textPlain = 'dlrow';
  }
      
  if (uppercase == 'true') {

    textPlain = textPlain.toUpperCase();
  }

  res.format({
    'text/plain': function(){
      res.send(textPlain);
    }
  });


});



module.exports = router;
