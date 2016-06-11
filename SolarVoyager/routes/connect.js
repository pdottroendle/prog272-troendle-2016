var mongoose = require('mongoose');

var connect = {

    connected: false,

    simpleConnect: function() {
        'use strict';
        var url = 'mongodb://127.0.0.1:27017/test';
        connect.connected = true;
        mongoose.connect(url);
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connected = true;
            console.log('Opened connection to mongo');
        });
    },
    // mongodb://<dbuser>:<dbpassword>@ds011281.mlab.com:11281/prog272-troendle
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
            connected = true;
            console.log('Opened connection to mongo');
        });
    },

    doConnection: function(useSimple) {
        'use strict';
        var connectType = useSimple || true; // makes all Mlab and true is local week 10
        if (connectType) {
            connect.simpleConnect();
        } else {
            connect.mlabConnect();
        }
    }
};

module.exports = connect;
