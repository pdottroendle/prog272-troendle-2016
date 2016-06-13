define(function () {
    'use strict';

    var insertUrl = '/allRenewables/insertValidCollection';

    function insertCollection() {
        var jqxhr = $.get(insertUrl, function (result) {
                $('#debug').html(JSON.stringify(response, null, 4));
                $('#year').val(response.renewables.Year);
                $('#solar').val(response.renewables['Solar (quadrillion Btu)']);
                $('#geo').val(response.renewables['Geothermal (quadrillion Btu)']);
                $('#biomass').val(response.renewables['Other biomass (quadrillion Btu)']);
                $('#wind').val(response.renewables['Wind power (quadrillion Btu)']);
                $('#liquid').val(response.renewables['Liquid biofuels (quadrillion Btu)']);
                $('#wood').val(response.renewables['Wood biomass (quadrillion Btu)']);
                $('#hydro').val(response.renewables['Hydropower (quadrillion Btu)']);
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
        $.getJSON('/allRenewables/all-data', function (result) {
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
        $.getJSON('/allRenewables/emptyCollection', function (result) {
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
                        year: $('#year').val(),
                        solar: $('#solar').val(),
                        geo: $('#geo').val(),
                        biomass: $('#biomass').val(),
                        wind: $('#wind').val(),
                        liquid: $('#liquid').val(),
                        wood: $('#wood').val(),
                        hydro: $('#hydro').val()
                    };
                    $.post('/allRenewables/insertValidCollection', userData, function (result) {
                    });
                });

            });
        }
    };

    return database;
});