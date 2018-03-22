var express = require('express');
var router = express.Router();




var myObj = [{'text': 'Det funkar'}];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(myObj);
});

router.post('/', function(req, res, next) {
  myObj.push({text:req.body.text});
  res.json(myObj);
});

module.exports = router;
