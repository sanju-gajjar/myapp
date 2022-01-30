var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sanju', name:'' });
});


router.get('/ashi', function(req, res, next) {
  res.render('index', { title: 'Ashi', name:'Ashi Sanju Gajjar' });
});

router.get('/sanju', function(req, res, next) {
  res.render('index', { title: 'Sanju',name:'Sanju Gajjar' });
});


module.exports = router;
