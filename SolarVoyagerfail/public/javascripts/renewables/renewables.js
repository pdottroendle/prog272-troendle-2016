define(['jquery'], function($) {
    'use strict';
    var index = 0;

    function getRenewable() {
        console.log('getRenewable called');
        $.getJSON('/renewables/', function (response) {
            console.log(response);

                renewables.renewablesList = response.renewables; //  cc < ==== HERE
                showRenewable(renewables.renewablesList[index]); //  cc < ==== HERE

            $('#debug').html(JSON.stringify(response, null, 4));
        })
            .fail(function (a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            })
            .done(function () {
                console.log('second success');
            })
            .always(function () {
                console.log('complete');
            });
    }

    function getSimpleKeys(renewable) {
        'use strict';
        return {
            year: renewable['Year'],
            solar: renewable['Solar (quadrillion Btu)'],
            geo: renewable['Geothermal (quadrillion Btu)'],
            biomass: renewable['Other biomass (quadrillion Btu)'],
            wind: renewable['Wind power (quadrillion Btu)'],
            liquid: renewable['Liquid biofuels (quadrillion Btu)'],
            wood: renewable['Wood biomass (quadrillion Btu'],
            hydro: renewable['Hydropower (quadrillion Btu)']

        }
    }

    function showRenewable(renewable) {
        'use strict';
        renewable = getSimpleKeys(renewable);
        $('#yearview').val(renewable.year);    //.html if not in a field
        $('#solarview').val(renewable.solar);
        $('#geoview').val(renewable.geo);
        $('#biomassview').val(renewable.biomass);
        $('#windview').val(renewable.wind);
        $('#liquidview').val(renewable.liquid);
        $('#woodview').val(renewable.wood);
        $('#hydroview').val(renewable.hydro);
    }

    function indexChange(test) {
        if (test < 12 && test >= 0) {
            index = test;
            $('#indexInput').val(index);
            showRenewable(renewables.energyOverviewList[index]);
        }
    }

    var indexButtonChange = function (event) {
        var test = event.data.value + index;
        indexChange(test);
    };

    var buttonChange = function () {
        var test = $('#indexInput').val();
        indexChange(parseInt(test));
    };

    var renewables = {
        color: 'red',
        size: 'big',
        renewablesList: [],         //  cc < ==== HERE
        getRenewable: getRenewable, //  cc < ==== HERE
        init: function () {
            console.log(renewables.color);
            $('#elf-view').load('/renewables/renewables-page', function () {
                $('#display').html(renewables.color);
                $('#display2').html(renewables.size);
                $('#plusButton').click({value: 1}, indexButtonChange);
                $('#minusButton').click({value: -1}, indexButtonChange);
                $('#indexInput').change(buttonChange);
                $('#renewable').change(function () {
                    getRenewable();
                });
                getRenewable();
            });
        }

    };
    return renewables;
});