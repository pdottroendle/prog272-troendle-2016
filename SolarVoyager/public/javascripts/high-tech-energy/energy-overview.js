/**
 * Created by bcuser on 5/28/16.
 */
define(function () {
    'use strict';
    var index = 0;

    function getRenewable() {
        console.log('getRenewable called');
        $.getJSON('/high-tech-energy', function (response) {
                console.log(response);

                // renewables.renewablesList = response.renewables;
                // console.log(response.renewables);
                // showRenewable(renewables.renewablesList[index]);
                // console.log(renewables.renewablesList[index]);

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

    var renewables = {
        color: 'red',
        size: 'big',
        init: function () {
            console.log(renewables.color);
            $('#elf-view').load('/renewables/renewables-page', function () {
                $('#display').html(renewables.color);
                $('#display2').html(renewables.size);
                $('#renewable').change(function () {
                    getRenewable();
                });
                getRenewable();
            });
        }

    };
    return renewables;
});
