var express = require('express');
var router = express.Router();
var scientists = require('../models/scientists');
var allMongo = require('./all-mongo');
var connect = require('./connect');

/* GET home page. */
router.get('/', function(req, res, next) {
  'use strict';
  res.render('index', {
    title: 'Week09-MongooseBasics'
  });
});

var connected = false;

router.get('/all-data', function(request, response) {
  'use strict';
  console.log('AllData route invoked.');
  if (!connect.connected) {
    connect.doConnection();
  }

  console.log('About to find scientists.');
  scientists.find({}, function(err, allData) {
    console.log(allData.length);
    console.log(allData[0]);

    allMongo.writeData('scientists.json', allData);

    response.send({
      result: 'Success',
      allData: allData
    });
  });
});

router.get('/emptyCollection', function(request, response) {
  'use strict';
  if (!connect.connected) {
    connect.doConnection();
  }

  scientists.remove({}, function(err) {
    if (err) {
      response.send({
        result: 'err',
        err: err
      });
    } else {
      response.send({
        result: 'collection removed'
      });
    }
  });
});

router.get('/insertValidCollection', function(request, response) {
  'use strict';
  allMongo.readDataAndInsert(response);
});

router.get('/:id', function(request, response) {
  'use strict';
  response.render(request.params.id, {});
});

module.exports = router;