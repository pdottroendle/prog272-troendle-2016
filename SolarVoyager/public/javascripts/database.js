//define(['jquery'], function($) {
//$(document).ready(function () {
define(function () {
    'use strict';

    var insertUrl = '/insertValidCollection';

    function insertCollection() {
        var jqxhr = $.get(insertUrl, function (result) {
            $('#debug').html(JSON.stringify(response, null, 4));
            //$('#dataType').val(response.settings.dataType);
            //$('#dataSource').val(response.settings.dataSource);
            //$('#comment').val(response.settings.comment);
            $('#yearView').val(response.renewables.Year);
            $('#solarView').val(response.renewables['Solar (quadrillion Btu)']);
            $('#geoView').val(response.renewables['Geothermal (quadrillion Btu)']);
            $('#biomassView').val(response.renewables['Other biomass (quadrillion Btu)']);
            $('#windView').val(response.renewables['Wind power (quadrillion Btu)']);
            $('#liquidView').val(response.renewables['Liquid biofuels (quadrillion Btu)']);
            $('#woodView').val(response.renewables['Wood biomass (quadrillion Btu)']);
            $('#hydroView').val(response.renewables['Hydropower (quadrillion Btu)']);
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

    function getAll() {
        $.getJSON('/all-data', function (result) {
            $('#display').html(JSON.stringify(result, null, 4));
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

    function emptyCollection() {
        $.getJSON('/emptyCollection', function (result) {
            $('#display').html(JSON.stringify(result, null, 4));
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

    var database = {
        init: function () {
            $('#elf-view').load('/database', function () {


                $('#insertValidData').click(insertCollection);
                $('#getAll').click(getAll);
                $('#emptyCollection').click(emptyCollection);


                $('#target').submit(function (event) {
                    event.preventDefault();
                    var userFormData = $(this).serialize();
                    $('#debug').html(userFormData);
                    var userData = {
                        //dataType: $('#dataType').val(),
                        //dataSource: $('#dataSource').val(),
                        //comment: $('#comment').val()
                        //$('#yearView').val();
                        //$('#solarView').val();
                        //$('#geoView').val()
                        //$('#biomassView').val(response.renewables['Other biomass (quadrillion Btu)']);
                        //$('#windView').val(response.renewables['Wind power (quadrillion Btu)']);
                        //$('#liquidView').val(response.renewables['Liquid biofuels (quadrillion Btu)']);
                        //$('#woodView').val(response.renewables['Wood biomass (quadrillion Btu)']);
                        //$('#hydroView').val(response.renewables['Hydropower (quadrillion Btu)']);
                    };
                    $.post('/allRenewables/insertValidCollection', userData, function (result) {
                    });
                });

            });
        }
    };

    return database;
});

/*
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
 */