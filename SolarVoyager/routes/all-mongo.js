var express = require('express');
var connect = require('./connect');
var Renewables = require('../models/renewables');
var fs = require('fs');

var allData;
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
    console.log('00000000000000000');
    console.log(record.Year);

    var newRecord = new Renewables({ // constructor using uppercase (grunt)
        'Year': record.Year,
        'Solar (quadrillion Btu)': record['Solar (quadrillion Btu)'],
        'Geothermal (quadrillion Btu)': record['Geothermal (quadrillion Btu)'],
        'Other biomass (quadrillion Btu)': record['Other biomass (quadrillion Btu)'],
        'Wind power (quadrillion Btu)': record['Wind power (quadrillion Btu)'],
        'Liquid biofuels (quadrillion Btu)': record['Liquid biofuels (quadrillion Btu)'],
        'Wood biomass (quadrillion Btu)': record['Wood biomass (quadrillion Btu)'],
        'Hydropower (quadrillion Btu)': record['Hydropower (quadrillion Btu)']
    });
    console.log('inserting 1 of ', allMongo.numberOfRecords);

    newRecord.save(function(err) {
        totalRecordsSaved++;
        console.log('saved: ', newRecord.Year, allMongo.numberOfRecords, totalRecordsSaved);

        if (totalRecordsSaved === allMongo.numberOfRecords) {
            response.send({
                result: 'Success Saving Renewable Records',
                totalSaved: totalRecordsSaved
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
    fs.readFile('data/Renewable.json', function(err, recordsText) {
        if (err) {
            throw (err);
        }
        var recordsTextAsString = JSON.parse(recordsText);
        //totalRecordsSaved = 0;
        allMongo.numberOfRecords = recordsTextAsString.length; //recordsTextAsString.length;
        for (var i = 0; i < recordsTextAsString.length; i++) {
            insertRecord(recordsTextAsString[i], response);
        }
    });
};

module.exports = allMongo;
