var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var x=Math.floor(Math.random() * 10);
  var y=0;
  y=Math.log2(x);
  res.render('computation', { title: `Math.log2() applied to ${x} is ${y}` });
});

module.exports = router;
