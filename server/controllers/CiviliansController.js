var express = require('express');
var router = express.Router();
var Civilians = require('../models/Civilian');

router.get('/', function(req, res){
  var civilian = new Civilian({
                  name: request.body.name,
  								movie: request.body.movie,
  								power: request.body.power,
  								height: request.body.height});
    civilian.save();
    res.render('civilians')
    console.log('get works for civilians view page')
  });

module.exports = router;
