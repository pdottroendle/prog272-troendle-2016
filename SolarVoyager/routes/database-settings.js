var express = require('express');
var router = express.Router();
var Settings = require('../models/settings');
var connect = require('./connect');

/* GET users listing. */
router.get('/', function(req, res, next) {
    'use strict';
    res.send('respond with a resource');
});

function saveSettings(request, response) {
    'use strict';
    console.log('request body', request.body);

    var newSettings = new Settings({
        'keyNote': 'settings',
        'dataSource': request.body.dataSource,
        'dataType': request.body.dataType,
        'comment': request.body.comment
    });

    console.log('inserting', newSettings.comment);

    newSettings.save(function(err) {
        //'use strict';
        console.log('saved: ', newSettings.dataSource, newSettings.dataType, newSettings.comment);
        response.send({
            result: 'success',
            query: request.body
        });

    });
}

router.post('/updateSettings', function(request, response) {
    'use strict';
    console.log('request body', request.body);

    var useLocalMongoDb = request.body.dataSource.toLowerCase() === 'local mongodb';
    console.log('update client selection ---->', useLocalMongoDb);
    if (!connect.connected) {
        if (useLocalMongoDb) {
            connect.doConnection();
            console.log('update client selection local MongoDb accepted');
        } else {
            connect.doConnectionMlab();
            console.log('update client selection Mlab accepted');
        }
    }

    Settings.findOne({
        keyNote: 'settings'
    }, function(err, doc) {
        //'use strict';
        console.log('findone', err, doc);
        if (err) {
            response.send({
                result: 'error'
            });
        } else {
            if (doc === null) {
                saveSettings(request, response);
            } else {
                doc.dataType = request.body.dataType;
                doc.dataSource = request.body.dataSource;
                doc.comment = request.body.comment;
                doc.save();
            }
        }
    });
});

router.get('/getSettings', function(request, response) {
    'use strict';

    var useLocalMongoDb = request.body.dataSource.toLowerCase() === 'local mongodb';
    console.log('get client selection ---->', useLocalMongoDb);
    if (!connect.connected) {
        if (useLocalMongoDb) {
            connect.doConnection();
            console.log('client selection local MongoDb accepted');
        } else {
            connect.doConnectionMlab();
            console.log('client selection Mlab accepted');
        }
    }

    Settings.findOne({
        keyNote: 'settings'
    }, function(err, doc) {
        //'use strict';
        console.log('findone', err, doc);
        if (err) {
            response.send({
                result: 'error'
            });
        } else {
            if (doc === null) {
                response.send({
                    Settings: {
                        dataType: 'Database',
                        dataSource: 'Local MongoDb',
                        comment: 'Default Comment'
                    }
                });
            } else {
                response.send({
                    Settings: doc
                });
            }
        }
    });
});

module.exports = router;
