var mongoose = require('mongoose');

var connect = {

    connected: false,

    simpleConnect: function() {
        'use strict';
        var url = 'mongodb://127.0.0.1:27017/renew';
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
        //ds019053.mlab.com:19053/prog272_troendle
        connect.connected = true;
        var userName = 'p94100687'; // week 10
        var password = 'p94100687'; // week 10
        var siteAndPort = 'ds019053.mlab.com:19053'; // week 10
        var databaseName = 'prog272_troendle'; // week 10
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
        'use strict';
        connect.simpleConnect();
    },

    doConnectionMlab: function(useSimple) {
        'use strict';
        connect.mlabConnect();
    }

    //var useSimple2 = useSimple;
    //var nochange = (useSimple === useSimple2);
    //if (!nochange) {
    //    mongoose.connection.close(function(){
    //        console.log('new database location');
    //    });
    //}
    // seem to be issues of latencies or  it connects then too soon?
    //var connectType = useSimple || true; // default Mlab and true is local
    //if (!useSimple) {
    //    console.log('client selection Mlab XXXXXXXXXXXXXXXXXXXXXXXXXXXX');}
    //if (connectType) {
    //    connect.simpleConnect();
    //} else {
    //    connect.mlabConnect();
    //}
};

module.exports = connect;
