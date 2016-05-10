var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Week05-ExpressRoutesSolar Troendle' });
});

router.get('/renewables', function(request, response) {
  console.log('Renewables called');

  fs.readFile('data/Renewable.json', 'utf8', function (err, data) {
    if (err) {
      // response.send(err, 404);
      response.status(404).send(err);
    } else {
      var json = JSON.parse(data);
      console.log(json);
      response.send({result: 'Success', renewables: json});
    }
  });

});
/*
router.get('/renewables/:id', function(request, response) {
  console.log('Renewables with id called');

  fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
    if (err)
    // response.send(err, 404);
      response.status(404).send(err);
  } else {
    var json = JSON.parse(data);
    console.log(json);
    response.send({result: 'Success', renewables: json});
  }

});
*/
module.exports = router;

