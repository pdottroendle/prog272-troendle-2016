var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PROG 272 Week04 - Express Routes Troendle' });
});

router.get('/read', function(request, response) {
  response.send([
    {"name": "SarahLee"},
    {"name": "SarahLa"}
  ]);
});

module.exports = router;
