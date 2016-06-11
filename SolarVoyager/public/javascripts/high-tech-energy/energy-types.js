/*
 define(['msnTypes'], function(msnTypes) {

 'use strict';

 var renewablesList;

 function getEnergyTypes(renewables) {

 }

 function getHighTechEnergy() {
 console.log('getHighTechEnergy called');

 $.getJSON('/high-tech-energy', function(response) {
 console.log(response);
 renewablesList = response.renewables;
 getEnergyTypes(renewablesList);
 var msnTypesList = msnTypes(renewablesList);
 // $('#debug').html(JSON.stringify(msnTypes, null, 4));
 displayMsnTypes(msnTypesList);
 })
 .done(function() {
 console.log('second success');
 })
 .fail(function(a, b, c) {
 console.log('Error', a, b, c);
 $('#debug').html('Error occured: ', a.status);
 })
 .always(function() {
 console.log('complete');
 });
 }

 function displayMsnTypes(msnTypesList) {
 msnTypesList.forEach(function(msnType) {
 $('#msnTypes').append('<li><a class="msnTypeHit">' + msnType.msn + ':' + msnType.description + '</a></li>');
 });
 $('.msnTypeHit').click(function(event) {
 alert(this.innerHTML);
 });
 }

 var energyTypes = {
 color: 'Green Energy Types',
 size: 'Energy Types Size',

 init: function() {
 console.log(energyTypes.color);
 $('#elf-view').load('/high-tech-energy/energy-types-page', function() {
 $('#display').html(energyTypes.color);
 $('#display2').html(energyTypes.size);
 getHighTechEnergy();
 });
 }
 };
 return energyTypes;
 });
 */

define(['jquery'], function($) {
    'use strict';
    var index = 0;
    console.log('renewables.js');

    function getRenewable() {
        console.log('getRenewable called');

        $.getJSON('/high-tech-energy/ByIndex/' + index, function(response) {
                console.log(response);

                //ZZZZ.renewablesList = response.renewables; //  cc < ==== HERE
                //showRenewable(ZZZZ.renewablesList[index]); //  cc < ==== HERE
                showRenewable(response.renewables);

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
            year: renewable.MSN,
            solar: renewable.YYYYMM,
            geo: renewable.Value,
            biomass: renewable.Column_Order,
            wind: renewable.Description,
            liquid: renewable.Unit
        }; // jscs:enable requireDotNotation
    }

    function showRenewable(renewable) {
        //'use strict';
        var renewablex = getSimpleKeys(renewable); // the variable name is now distinguished by a different name
        $('#yearView').html(renewablex.year); //.html is used instead of .val for the display
        $('#solarView').html(renewablex.solar);
        $('#geoView').html(renewablex.geo);
        $('#biomassView').html(renewablex.biomass);
        $('#windView').html(renewablex.wind);
        $('#liquidView').html(renewablex.liquid);
    }

    function indexChange(test) { //   static form value is read and written back validated
        if (test < 7009 && test >= 0) {
            index = test;
            $('#indexInput').val(index); // the value is send back to the field
            // showRenewable(ZZZZ.renewablesList[index]);
            getRenewable();
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
        size: 'server side indexed (GET /:id )',
        renewablesList: [], //  cc < ==== HERE
        getRenewable: getRenewable, //  cc < ==== HERE
        init: function() {
            console.log(ZZZZ.color);
            $('#elf-view').load('/high-tech-energy/energy-types-page', function() {
                $('#display').html(ZZZZ.color);
                $('#display2').html(ZZZZ.size);
                $('#plusButton').click({
                    value: +1
                }, indexButtonChange); // note the list has a descending order
                $('#minusButton').click({
                    value: -1
                }, indexButtonChange);
                $('#indexInput').change(buttonChange);
                //$('#XXXX').change(function () {     // ppt < ==  renamed for clarity purpose "renewables"
                //    getRenewable();
                //});                  // ppt < ====== seemed not beeing used
                getRenewable();
            });
        }

    };
    return ZZZZ;
});
