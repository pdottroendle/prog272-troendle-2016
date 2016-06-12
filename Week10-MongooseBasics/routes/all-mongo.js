var express = require('express');
var connect = require('./connect');
var Scientists = require('../models/scientists');
var fs = require('fs');
var allData;
var totalScientistsSaved = 0;

function allMongo() {
    'use strict';
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
            response.send({
                result: 'Success Saving Scientists',
                totalSaved: totalScientistsSaved
            });
        }
    });
}

allMongo.writeData = function(fileName, data) {
    'use strict';
    var dataAsString = JSON.stringify(data, null, 4);
    fs.writeFile(fileName, dataAsString, function(err, result) {
        if (err) {
            throw (err);
        }
        console.log('success writing file');
    });
};

allMongo.readDataAndInsert = function(response) {
    'use strict';
    fs.readFile('ValidScientists.json', function(err, scientistsText) {
        if (err) {
            throw (err);
        }
        scientistsText = JSON.parse(scientistsText);
        totalScientistsSaved = 0;
        allMongo.numberOfScientists = scientistsText.length;
        for (var i = 0; i < scientistsText.length; i++) {
            insertScientist(scientistsText[i], response);
        }
    });
};

module.exports = allMongo;