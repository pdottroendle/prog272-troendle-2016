/** Created by Peter-Paul Troendle 5/11/2016    .. */


function objectToArray(obj) {
    'use strict';

    //console.log(obj);

    var objectAsArray = [];
    for (var key in obj) {
        //console.log(obj[key]);
        objectAsArray.push([key, obj[key]]);
    }

    objectAsArray.sort(function(a, b) {
        return a[1] > b[1];
    });
    return objectAsArray;
}

module.exports.objectToArray = objectToArray;
