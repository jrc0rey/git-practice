var express = require('express');
var router = express.Router();
var Civilians = require('../models/Civilian');

router.get('/', function(req, res){
  res.render('civilians')
  console.log('get works for civilians view page')
});

module.exports = router;
