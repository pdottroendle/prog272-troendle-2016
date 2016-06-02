/**
 * Created by bcuser on 5/22/16.
 */
$('#energyByIndex').change(function() {
    'use strict';
    getEnergyByIndex();
});

define(function() {
    'use strict';

    function getEnergyByIndex() {
        var indexInput = $('#energyByIndex').val();
        console.log('getEnergyByIndex called', indexInput);

        $.getJSON('/high-energy-tech/byIndex/' + indexInput, function(response) {
                console.log(response);
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

    function indexButtonChange(event) {
        var index = $('#energyByIndex').val();
        $('#energyByIndex').val(parseInt(index) + event.data.value);
        getEnergyByIndex();
    }

    var energyTypes = {
        color: 'red',
        size: 'big',
        init: function() {
            console.log(energyByIndex.color);
            $('#elf-view').load('/high-energy-tech/renewables-by-index-page', function() { //r
                $('#display').html(energyByIndex.color);
                $('#display2').html(energyByIndex.size);

                $('#plusButton').click({
                    value: 1
                }, indexButtonChange);
                $('#minusButton').click({
                    value: -1
                }, indexButtonChange);

                //$('#energyByIndex').change(function() {
                    getEnergyByIndex();
                });
                //getRenewableByIndex();
            //});
        }
    };
    return energyTypes;
});
