var express = require('express');
var router = express.Router(); // comment out??
var connect = require('./connect');
var Settings = require('../models/renewables');
// grunt asks (S)ettings with uppercase S because its used in a constructor

var fs = require('fs');

var allData;
var totalRecordsSaved = 0;

function allMongo() {

}

allMongo.numberOfRecords = 0;

function insertRecord(record, response) {
    'use strict';
    if (!connect.connected) {
        connect.doConnection();
    }
    var newRecord = new Settings({ // constructor using (S)ettings
        'Year': record.year,
        'Solar (quadrillion Btu)': record.solar,
        'Geothermal (quadrillion Btu)': record.geo,
        'Other biomass (quadrillion Btu)': record.bio,
        'Wind power (quadrillion Btu)': record.wind,
        'Liquid biofuels (quadrillion Btu)': record.liquid,
        'Wood biomass (quadrillion Btu)': record.wood,
        'Hydropower (quadrillion Btu)': record.hydro
    });

    console.log('inserting', newRecord.year);

    newRecord.save(function(err) {
        totalRecordsSaved++;
        console.log('saved: ', newRecord.year, allMongo.numberOfRecords, totalRecordsSaved);

        if (totalRecordsSaved === allMongo.numberOfRecords) {
            //mongoose.disconnect();
            response.send({
                result: 'Success'
            });
        }
    });
}

allMongo.writeData = function(fileName, data) {
    'use strict';
    var data0 = JSON.stringify(data, null, 4);
    fs.writeFile(fileName, data, function(err, data0) {
        if (err) {
            throw (err);
        } //;
        console.log('success writing file');
    });
};

allMongo.readDataAndInsert = function(response) {
    'use strict';
    fs.readFile('data/Renewable.json', 'utf8', function(err, settings) {
        if (err) {
            throw (err);
        } //;
        settings = JSON.parse(settings);
        for (var i = 0; i < settings.length; i++) {
            insertRecord(settings[i], response);
        } //;
    });
};

module.exports = allMongo;
