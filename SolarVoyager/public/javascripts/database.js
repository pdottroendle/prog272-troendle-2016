define(function () {
    'use strict';

    var insertUrl = '/allRenewables/insertValidCollection';

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
                        year: $('#yearView').val(),
                        solar: $('#solarView').val(),
                        geo: $('#geoView').val(),
                        biomass: $('#biomassView').val(),
                        wind: $('#windView').val(),
                        liquid: $('#liquidView').val(),
                        wood: $('#woodView').val(),
                        hydro: $('#hydroView').val()
                    };
                    $.post('/allRenewables/insertValidCollection', userData, function (result) {
                    });
                });

            });
        }
    };

    return database;
});