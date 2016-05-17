/** Created by Peter-Paul Troendle 5/11/2016    .. */
// Sort by checking the relative sizes of the second element in the arrays.
// JavaScript passes pairs of arrays to the anonymous function
// passed to the sort method. Check which of the two arrays is larger by
// comparing the second element in the arrays. Here is the array: ['a', 1].
// The value we check is the number, which in this case is 1.
// So when two arrays are passed, we want to to know if 1 is larger than 2.
// It should take about 10 or 12 characters to make the test.

function objectToArray(obj) {
    'use strict';
    //console.log(obj);

    var objectAsArray = [];
    for (var key in obj) {
        //console.log(obj[key]);
        if (obj.hasOwnProperty(key)) {
            objectAsArray.push([key, obj[key]]);
        }
    }
    objectAsArray.sort(function (a, b) {
        return a[1] > b[1];
    });
    return objectAsArray;
}

module.exports.objectToArray = objectToArray;  // not sure is not in coursework??
