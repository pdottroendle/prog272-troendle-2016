var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PROG 272 Week04 - Express Routes Troendle' });
});

router.get('/read', function(request, response) {
  console.log('Read was called from the server', request.query);
  response.send([
    {"name": "SarahLee"},
    {"name": "SarahLa"},
    {result: parseInt(request.query.operatorA) + parseInt(request.query.operatorB)}
  ]);
});

router.get('/Qux', function(request, response) {
  console.log('Qux was called from the server');
  response.send([
    {"name": "quxLee"},
    {"name": "quxLa" , myArray: [1,2,3]}
  ]);
});

router.get('/:id', function(request, response)  {
    response.send(request.params.id);
});

module.exports = router;
