var express = require('express');
var connect = require('./connect');
var Renewsables = require('../models/renewables');
var fs = require('fs');
var totalRecordsSaved = 0;

function allMongo() {
    'use strict';
}

allMongo.numberOfRecords = 0;

function insertRecord(record, response) {
    'use strict';
    if (!connect.connected) {
        connect.doConnection();
    }
    var newRecord = new Renewsables({ // constructor using uppercase (grunt)
        'Year': record.year,
        'Solar (quadrillion Btu)': record.solar,
        'Geothermal (quadrillion Btu)': record.geo,
        'Other biomass (quadrillion Btu)': record.biomass,
        'Wind power (quadrillion Btu)': record.wind,
        'Liquid biofuels (quadrillion Btu)': record.liquid,
        'Wood biomass (quadrillion Btu)': record.wood,
        'Hydropower (quadrillion Btu)': record.hydro
    });
    console.log('inserting', newRecord.year);

    newRecord.save(function (err) {
        totalRecordsSaved++;
        console.log('saved: ', newRecord.year, allMongo.numberOfRecords, totalRecordsSaved);

        if (totalRecordsSaved === allMongo.numberOfRecords) {
            response.send({
                result: 'Success Saving Renewable Records',
                totalSaved: totalRecordsSaved
            });
        }
    });
}


allMongo.writeData = function (fileName, data) {
    'use strict';
    var dataAsString = JSON.stringify(data, null, 4);
    fs.writeFile(fileName, dataAsString, function (err, result) {
        if (err) {
            throw (err);
        }
        console.log('success writing file');
    });
};


allMongo.readDataAndInsert = function (response) {
    'use strict';
    fs.readFile('data/Renewable.json', function (err, recordsText) {
        if (err) {
            throw (err);
        }
        var recordsTextAsString = JSON.parse(recordsText);
        totalRecordsSaved = 0;
        allMongo.numberOfRecords = recordsText.length ; //recordsTextAsString.length;
        for (var i = 0; i < recordsText.length; i++) {
            insertRecord(recordsTextAsString[i], response);
        }
    });
};

module.exports = allMongo;