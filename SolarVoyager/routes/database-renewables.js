var express = require('express');
var router = express.Router();
var modelRenewables = require('../models/renewables');
var allMongo = require('./all-mongo');
var connect = require('./connect');

router.get('/', function (req, res, next) {
    'use strict';
    res.render('index', {
        title: 'Week09-MongooseBasics'
    });
});

router.get('/all-data', function (request, response) {
    'use strict';
    console.log('AllData route invoked.');
    if (!connect.connected) {
        connect.doConnection();
    }

    console.log('About to find renewables.');
    modelRenewables.find({}, function (err, data) {
        console.log(data.length);
        console.log(data[0]);
        var allData = data;

        allMongo.writeData('renewables.json', allData);

        response.send({
            result: 'Success',
            allData: data
        });
    });
});

router.get('/emptyCollection', function (request, response) {
    'use strict';
    if (!connect.connected) {
        connect.doConnection();
    }
    modelRenewables.remove({}, function (err) {
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

router.get('/insertValidCollection', function (request, response) {
    'use strict';
    allMongo.readDataAndInsert(response);
});

router.get('/:id', function (request, response) {
    'use strict';
    response.render(request.params.id, {});
});

module.exports = router;