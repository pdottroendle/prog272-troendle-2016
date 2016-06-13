/**
 * Created by charlie on 6/5/16.
 * Updated by ppt
 */

var express = require('express');
//var router = express.Router();
var connect = require('./connect');
var Scientists = require('../models/scientists');
var fs = require('fs');

var allData;
var totalScientistsSaved = 0;

function allMongo() {

}

allMongo.numberOfScientists = 0;

function insertScientist(scientist, response) {
    'use strict';
    if (!connect.connected) {
        connect.doConnection();
    }
    var newScientist = new Scientists({
        'firstName': scientist.firstName,
        'lastName': scientist.lastName,
        'subject': scientist.subject,
        'subjects': scientist.subjects,
        'comments': scientist.comments
    });

    console.log('inserting', newScientist.lastName);

    newScientist.save(function(err) {
        totalScientistsSaved++;
        console.log('saved: ', newScientist.lastName, allMongo.numberOfScientists, totalScientistsSaved);

        if (totalScientistsSaved === allMongo.numberOfScientists) {
            //mongoose.disconnect();
            response.send({
                result: 'Success'
            });
        }
    });
}

allMongo.writeData = function(fileName, data) {
    'use strict';
    data = JSON.stringify(data, null, 4);
    fs.writeFile(fileName, data, function(err, data) {
        if (err) {
            throw (err);
        }
        console.log('success writing file');
    });
};

allMongo.readDataAndInsert = function(response) {
    'use strict';
    fs.readFile('ValidScientists.json', function(err, scientists) {
        if (err) {
            throw (err);
        }
        scientists = JSON.parse(scientists);
        allMongo.numberOfScientists = scientists.length;
        for (var i = 0; i < scientists.length; i++) {
            insertScientist(scientists[i], response);
        }
    });
};

module.exports = allMongo;
