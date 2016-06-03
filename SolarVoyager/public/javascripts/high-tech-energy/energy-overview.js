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
        color: 'display of the energy data ',
        size: 'big',
        init: function () {
            $('#elf-view').load('/renewables/renewables-page', function () {
                $('#renewable').change(function () {
                    getRenewable();
                });
                getRenewable();
            });
        }

    };
    return renewables;
});
