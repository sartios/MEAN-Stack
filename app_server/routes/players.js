var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('players',{title: 'Players'});
});

module.exports = router;