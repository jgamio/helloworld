var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var uppercase = req.query.uppercase;
  var reversed = req.query.reversed

  var textPlain = handleText('hello world',uppercase,reversed);
 
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

  var textPlain = handleText('hello',uppercase,reversed);
 
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

  var textPlain = handleText('world',uppercase,reversed);
 
  res.format({
    'text/plain': function(){
      res.send(textPlain);
    }
  });


});



function handleText(sValue,uppercase,reversed) {

  if (reversed == 'true') {
    
    sValue = sValue.split("").reverse().join("");
  }
  if (uppercase == 'true') {
    
    sValue = sValue.toUpperCase();
  }  
  
  return sValue;

}


module.exports = router;
