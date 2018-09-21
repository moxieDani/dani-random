var express = require('express');
var router = express.Router();

var randomNumber = require('./../modules/random.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var lotto = randomNumber.getRandomNumbers(1,45,true,6);
  var strLotto = lotto.join([separator = ' / '])
  res.render('index', { title: 'Lotto Number', lottoNumbers: strLotto});
});

module.exports = router;
