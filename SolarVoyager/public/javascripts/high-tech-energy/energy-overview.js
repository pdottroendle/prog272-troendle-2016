define(['jquery'], function ($) {
    'use strict';
    var index = 0;
    console.log('energy-types.js');
    function getRenewable() {
        console.log('energy-types called');
        $.getJSON('/high-tech-energy/', function (response) {
                console.log(response);

                ZZZZ.energyList = response.renewables; //  cc < ==== HERE
                showRenewable(ZZZZ.energyList[index]); //  cc < ==== HERE

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
            year: renewable['MSN'],
            solar: renewable['YYYYMM'],
            geo: renewable['Value'],
            biomass: renewable['Column_Order'],
            wind: renewable['Description'],
            liquid: renewable['Unit'],
        }
    }

    function showRenewable(renewable) {
        'use strict';
        var renewablex = getSimpleKeys(renewable);  // the variable name is now distinguished by a separate name
        $('#yearView').html(renewablex.year);    //.html is used instead of .val for the display
        $('#solarView').html(renewablex.solar);
        $('#geoView').html(renewablex.geo);
        $('#biomassView').html(renewablex.biomass);
        $('#windView').html(renewablex.wind);
        $('#liquidView').html(renewablex.liquid);
    }

    function indexChange(test) {                 //   static form value is read and written back validated
        if (test < 7009 && test >= 0) {
            index = test;
            $('#indexInput').val(index);         // the value is send back to the field
            showRenewable(ZZZZ.energyList[index]);
        }
    }

    var indexButtonChange = function (event) {  // the user  +  or  - event is added or substracted to the value
        var test = event.data.value + index;
        indexChange(test);
    };

    var buttonChange = function () {
        var test = $('#indexInput').val();     // the default value or the user filled input is taken
        indexChange(parseInt(test));
    };

    var ZZZZ = {                    // ppt < ==== needed a variable name that more distinctable than "energy"
        color: 'display of the energy data',
        size: 'client side index, see on the bottom of the list',
        energyList: [],         //  cc < ==== HERE
        getRenewable: getRenewable, //  cc < ==== HERE
        init: function () {
            console.log(ZZZZ.color);
            $('#elf-view').load('/high-tech-energy/energy-overview-page', function () {
                $('#display').html(ZZZZ.color);
                $('#display2').html(ZZZZ.size);
                $('#plusButton').click({value: +1}, indexButtonChange);  // note the list has a descending order
                $('#minusButton').click({value: -1}, indexButtonChange);
                $('#indexInput').change(buttonChange);
                //$('#XXXX').change(function () {     // ppt < ==  renamed for clarity purpose "energy"
                //    getRenewable();
                //});                  // ppt < ====== seemed not beeing used
                getRenewable();
            });
        }

    };
    return ZZZZ;
});