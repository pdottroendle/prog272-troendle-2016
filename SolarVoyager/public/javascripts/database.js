define(function () {
    'use strict';

    var insertUrl = '/allRenewables/insertValidCollection';

    function insertCollection() {
        var jqxhr = $.get(insertUrl, function (result) {
                $('#debug').html(JSON.stringify(result, null, 4));
                $('#year').val(result.Year);
                $('#solar').val(result['Solar (quadrillion Btu)']);
                $('#geo').val(result['Geothermal (quadrillion Btu)']);
                $('#biomass').val(result['Other biomass (quadrillion Btu)']);
                $('#wind').val(result['Wind power (quadrillion Btu)']);
                $('#liquid').val(result['Liquid biofuels (quadrillion Btu)']);
                $('#wood').val(result['Wood biomass (quadrillion Btu)']);
                $('#hydro').val(result['Hydropower (quadrillion Btu)']);
                alert('success');
                console.log(JSON.stringify(result, null, 4));
            })
            .done(function () {
                console.log('second success');
            })
            .fail(function () {
                alert('error');
            })
            .always(function () {
                console.log('finished');
            });
    }

    function getAll() {
        $.getJSON('/allRenewables/all-data', function (result) {
                $('#debug').html(JSON.stringify(result, null, 4));
            })
            .done(function () {
                console.log('second success');
            })
            .fail(function () {
                alert('error');
            })
            .always(function () {
                console.log('finished');
            });
    }

    function emptyCollection() {
        $.getJSON('/allRenewables/emptyCollection', function (result) {
                $('#debug').html(JSON.stringify(result, null, 4));
            })
            .done(function () {
                console.log('second success');
            })
            .fail(function () {
                alert('error');
            })
            .always(function () {
                console.log('finished');
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
                    console.log(userFormData);
                    $.post('/allRenewables/insertValidCollection', userData, function (result) {
                    });
                });

            });
        }
    };

    return database;
});
