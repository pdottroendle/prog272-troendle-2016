//define(['jquery'], function($) {
define(['msnTypes'], function(msnTypes) {
    'use strict';
    var index = 0;
    var renewablesList;
    console.log('renewables.js');

    function getEnergyTypes(renewables) {

    }

    function getHighTechEnergy() {
        console.log('getHighTechEnergy called');
        //$.getJSON('/high-tech-energy/ByIndex/' + index, function(response) {
        $.getJSON('/high-tech-energy', function(response) {
                console.log(response);
                //showRenewable(response.renewables);

                renewablesList = response.renewables;
                getEnergyTypes(renewablesList);
                var msnTypesList = msnTypes(renewablesList);
                $('#debug').html(JSON.stringify(msnTypes, null, 4));
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

    var energyTypes = {
        color: 'Green Energy Types',
        size: 'Energy Types Size',
        //renewablesList: [],
        init: function() {
            console.log(energyTypes.color);
            $('#elf-view').load('/high-tech-energy/energy-types-page', function() {
                $('#display').html(energyTypes.color);
                $('#display2').html(energyTypes.size);
                $('#plusButton').click({
                    value: +1
                }, indexButtonChange); // note the list has a descending order
                $('#minusButton').click({
                    value: -1
                }, indexButtonChange);
                $('#indexInput').change(buttonChange);
                getHighTechEnergy();
            });
        }

    };
    return energyTypes;
});
