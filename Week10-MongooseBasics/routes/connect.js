/**
 * Created by charlie on 6/11/2015.
 */

var mongoose = require('mongoose');

var connect = {

    connected: false,

    simpleConnect: function() {
        var url= 'mongodb://127.0.0.1:27017/test';
        connect.connected = true;
        mongoose.connect(url);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connect.connected = true;
            console.log('Opened connection to mongo');
        });
    },

    mlabConnect: function() {
        'use strict';
        connect.connected = true;
        var userName = 'p94100687'; // week 10
        var password = 'p94100687'; // week 10
        var siteAndPort = 'ds011281.mlab.com:11281'; // week 10
        var databaseName = 'prog272-troendle'; // week 10
        var url = 'mongodb://' + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;
        console.log(url);
        mongoose.connect(url);

        // This part is optional
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connect.connected = true;
            console.log('Opened connection to mongo');
        });
    },

    doConnection: function(useSimple) {
        var connectType = useSimple || true;
        if (connectType) {
            connect.simpleConnect();
        } else {
            connect.mlabConnect();
        }
    }

};

module.exports = connect;