define(['jquery', 'settings'], function($, settings) {
    'use strict';

    var index = 0;
    //var useDatabase = true;

    var routeType = settings.useDatabase ? 0 : 1;

    //var renewableRoutes = ['/allRenewables/all-data', '/renewables/'];
    var renewableRoutes = ['/allRenewables/', '/renewables/'];

    console.log('renewables.js');

    function getRenewable() {
        console.log('getRenewable called');
        $.getJSON(renewableRoutes[routeType], function(response) {
                console.log(response);

                renewables.renewablesList = response.renewables;
                showRenewable(renewables.renewablesList[index]);

                $('#debug').html(JSON.stringify(response, null, 4));
            })
            .fail(function(a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            })
            .done(function() {
                console.log('second success');
            })
            .always(function() {
                console.log('complete');
            });
    }

    function getSimpleKeys(renewable) {
        //'use strict';
        return {
            // jscs:disable requireDotNotation
            year: renewable.Year,
            solar: renewable['Solar (quadrillion Btu)'],
            geo: renewable['Geothermal (quadrillion Btu)'],
            biomass: renewable['Other biomass (quadrillion Btu)'],
            wind: renewable['Wind power (quadrillion Btu)'],
            liquid: renewable['Liquid biofuels (quadrillion Btu)'],
            wood: renewable['Wood biomass (quadrillion Btu)'],
            hydro: renewable['Hydropower (quadrillion Btu)']
        }; // jscs:enable requireDotNotation
    }

    function showRenewable(renewable) {
        //'use strict';
        if (!useDatabase) { // week10 Finals  - need the data from Mongoodb ??
            var renewablex = getSimpleKeys(renewable); // the variable name is now distinguished by a separate name
            $('#yearView').html(renewablex.year); //.html is used instead of .val for the display
            $('#solarView').html(renewablex.solar);
            $('#geoView').html(renewablex.geo);
            $('#biomassView').html(renewablex.biomass);
            $('#windView').html(renewablex.wind);
            $('#liquidView').html(renewablex.liquid);
            $('#woodView').html(renewablex.wood);
            $('#hydroView').html(renewablex.hydro);
        }
    }

    function indexChange(test) { //   static form value is read and written back validated
        if (test < 12 && test >= 0) {
            index = test;
            $('#indexInput').val(index); // the value is send back to the field
            showRenewable(renewables.renewablesList[index]);
        }
    }

    var indexButtonChange = function(event) { // the user  +  or  - event is added or substracted to the value
        var test = event.data.value + index;
        indexChange(test);
    };

    var buttonChange = function() {
        var test = $('#indexInput').val(); // the default value or the user filled input is taken
        indexChange(parseInt(test));
    };

    var renewables = {
        color: 'display of the energy data',
        size: 'client side index, see on the bottom of the list',
        renewablesList: [], //  its for the hard Test
        getRenewable: getRenewable, //  its for the hard Test
        init: function() {
            console.log(renewables.color);
            $('#elf-view').load('/renewables/renewables-page', function() {
                $('#display').html(renewables.color);
                $('#display2').html(renewables.size);
                $('#plusButton').click({
                    value: +1
                }, indexButtonChange); // note the list has a descending order
                $('#minusButton').click({
                    value: -1
                }, indexButtonChange);
                $('#indexInput').change(buttonChange);

                getRenewable();
            });
        }

    };
    return renewables;
});
