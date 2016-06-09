var express = require('express');
var router = express.Router();
var settingsrenewables = require('../models/renewables');
var allMongo = require('./all-mongo');
var connect = require('./connect');

/* GET users listing. */
router.get('/', function(req, res, next) { 'use strict';
    res.send('respond with a resource');
});


router.get('/all-data', function(request, response) {
    console.log("AllData route invoked.");
    if (!connect.connected) {
        connect.doConnection();
    }

    console.log("About to find renewables.");
    settingsrenewables.find({}, function(err, data) {
        console.log(data.length);
        console.log(data[0]);
        allData = data;

        allMongo.writeData('data/renewables.json', allData);

        response.send({
            result: 'Success',
            allData: data
        });
    });
});

router.get('/emptyCollection', function(request, response) {
    settingsrenewables.remove({}, function(err) {
        if (err) {
            response.send({result: 'err', err: err});
        } else {
            response.send({result: 'collection removed'});
        }
    });
});

router.get('/insertValidCollection', function(request, response) {
    allMongo.readDataAndInsert(response);
});

router.get('/:id', function(request, response) {
    response.render(request.params.id, {});
});

module.exports = router;