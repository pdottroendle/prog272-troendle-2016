define(['jquery'], function ($) {
    'use strict';
    console.log('renewables-year.js');
    var index = 0;
    function getRenewableByYear() {
        //var index = $('#renewableByYear').val();
                console.log('getRenewableByYear called');
                $.getJSON('/renewables/byYear/' + index, function (response) {    //yearInput
                        console.log(response);

                        renewables.renewablesList = response.renewables; //  cc < ==== HERE
                        showRenewable(renewables.renewablesList[index]); //  cc < ==== HERE

                $('#debug').html(JSON.stringify(response, null, 4));
            })
            .done(function () {
                console.log('second success');
            })
            .fail(function (a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            })
            .always(function () {
                console.log('complete');
            });
    }


    /*
    function indexButtonChange(event) {
        var index = $('#renewableByYear').val();
        $('#renewableByYear').val(parseInt(index) + event.data.value);
        getRenewableByYear();
    } */

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

    var renewablesByYear = {
        color: 'display of the energy data by year',
        size: 'big',
        init: function () {
            console.log(renewablesByYear.color);
            $('#elf-view').load('/renewables/renewables-by-year-page', function () { //r
                $('#display').html(renewablesByYear.color);
                $('#display2').html(renewablesByYear.size);

                $('#plusButton').click({
                    value: 1
                }, indexButtonChange);
                $('#minusButton').click({
                    value: -1
                }, indexButtonChange);

                $('#renewableByYear').change(function () {
                    getRenewableByYear();
                });
                getRenewableByYear();
            });
        }
    };
    return renewablesByYear;
});
