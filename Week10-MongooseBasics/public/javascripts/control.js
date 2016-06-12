$(document).ready(function () {
    'use strict';
    var insertUrl = '/insertValidCollection';

    function insertCollection() {
        // Assign handlers immediately after making the request,
        // and remember the jqxhr object for this request
        var jqxhr = $.get(insertUrl, function (result) {  // change by ppt
                alert("success");
                console.log(JSON.stringify(result, null, 4));
            })
            .done(function () {
                console.log("second success");
            })
            .fail(function () {
                alert("error");
            })
            .always(function () {
                console.log("finished");
            });
    }

    var emptyUrl = '/emptyCollection';

    function emptyCollection() {
        var jqxhr = $.get(emptyUrl, function (result) {  // change by ppt
                alert("success");
                console.log('empty collection'); // JSON.stringify(result, null, 4));
            })
            .done(function () {
                console.log("second success");
                alert("error");
            })
            .always(function () {
                console.log("finished");
            });
    }

    $('#insertValidData').click(insertCollection);
    $('#emptyCollection').click(emptyCollection);

    $("#getAll").click(function () {
        $.getJSON('/all-data', function (result) {
            $('#display').html(JSON.stringify(result, null, 4));
        })
    });
});