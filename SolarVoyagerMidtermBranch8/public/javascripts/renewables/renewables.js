define(function() {
    'use strict';
    var index = 0;

    function getRenewable() {
        console.log('getRenewable called');
        $.getJSON('/renewables', function(response) {
                console.log(response);
                //renewables.renewablesList = response.renewables; //< ==== HERE
                //showRenewable(renewables.renewablesList[index]); //< ==== HERE
                $('#debug').html(JSON.stringify(response, null, 4));
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

    var renewables = {
        color: 'red',
        size: 'big',
        //renewablesList: [],        // < ==== HERE
        //getRenewable: getRenewable,// < ==== HERE
        init: function() {
            console.log(renewables.color);
            $('#elf-view').load('/renewables/renewables-page', function() {
                $('#display').html(renewables.color);
                $('#display2').html(renewables.size);
                $('#renewable').change(function() {
                    getRenewable();
                });
                getRenewable();
            });
        }

    };
    return renewables;
});


/*
function getSimpleKeys(renewable({
    'use strict';
    return{
        year: renewable['Year'],
        solar: renewable['Solar (quadrillion Btu)'],
        geo: renewable['Geothermal (quadrillion Btu)'],
        biomass: renewable['Other biomass (quadrillion Btu)'],
        wind: renewable['Wind power (quadrillion Btu)'],
        liquid: renewable['Liquid biofuels (quadrillion Btu)'],
        wood: renewable['Wood biomass (quadrillion Btu'],
        hydro: renewable['Hydropower (quadrillion Btu)']

    }}

function showRenewable(renewable) {
    'use strict';
    renewable = getSimpleKeys(renewable);
    $('#yearview').val(renewable.year);
    $('#solarview').val(renewable.solar);
    $('#geoview').val(renewable.geo);
    $('#biomassview').val(renewable.biomass);
    $('#windview').val(renewable.wind);
    $('#liquidview').val(renewable.liquid);
    $('#woodview').val(renewable.wood);
    $('#hydroview').val(renewable.hydro);
}
    */