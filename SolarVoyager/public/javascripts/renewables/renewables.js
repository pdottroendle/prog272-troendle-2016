define(['jquery'], function ($) {
    'use strict';
    var index = 0;
    console.log('renewables.js');
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
        $('#yearView').html(renewable.year);    //.html if not in a field
        $('#solarView').html(renewable.solar);
        $('#geoView').html(renewable.geo);
        $('#biomassView').html(renewable.biomass);
        $('#windView').html(renewable.wind);
        $('#liquidView').html(renewable.liquid);
        $('#woodView').html(renewable.wood);
        $('#hydroView').html(renewable.hydro);
    }

    function indexChange(test) {
        if (test < 12 && test >= 0) {
            index = test;
            $('#indexInput').val(index);
            showRenewable(renewables.renewablesList[index]);
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
        color: 'display of the energy data',
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