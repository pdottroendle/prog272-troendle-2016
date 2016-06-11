define(['jquery'], function($) {
    'use strict';
    var index = 0;
    var useLocalDatabase = false; //week11
    var routeType = useLocalDatabase ? 0 : 1;

    var routeTypes = ['/allRenewables', '/renewables/']; //week11

    console.log('renewables.js');

    function getRenewable() {
        console.log('getRenewable called');
        //$.getJSON('/renewables/', function(response) {     //week11
        $.getJSON(routeTypes[routeType], function(response) {
                console.log(response);

                ZZZZ.renewablesList = response.renewables; //  cc < ==== HERE
                showRenewable(ZZZZ.renewablesList[index]); //  cc < ==== HERE

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
        if (!useLocalDatabase) { // week10 Finals  - need the data from Mongoodb ??
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
            showRenewable(ZZZZ.renewablesList[index]);
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

    var ZZZZ = { // ppt < ==== needed a variable name that more distinctable than "renewables"
        color: 'display of the energy data',
        size: 'client side index, see on the bottom of the list',
        renewablesList: [], //  cc < ==== HERE
        getRenewable: getRenewable, //  cc < ==== HERE
        init: function() {
            console.log(ZZZZ.color);
            $('#elf-view').load('/renewables/renewables-page', function() {
                $('#display').html(ZZZZ.color);
                $('#display2').html(ZZZZ.size);
                $('#plusButton').click({
                    value: +1
                }, indexButtonChange); // note the list has a descending order
                $('#minusButton').click({
                    value: -1
                }, indexButtonChange);
                $('#indexInput').change(buttonChange);
                //$('#XXXX').change(function () { // ppt < ==  renamed for clarity purpose "renewables"
                //    getRenewable();
                //});  // ppt < ====== seemed not beeing used
                getRenewable();
            });
        }

    };
    return ZZZZ;
});
