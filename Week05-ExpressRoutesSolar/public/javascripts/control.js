$(document).ready(function () {
    'use strict';

    $('#getRenewable').click(getRenewable);
    $('#getByIndex').click(getRenewableByIndex);
    $('#getByYear').click(getRenewableByYear);

    function getRenewable() {
        console.log('getRenewable called');
        $.getJSON('/renewables', function (response) {
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

    function getRenewableByIndex() {
        var indexInput = $('#InputAsIndex').val();
        console.log('getRenewableByIndex called', indexInput);

        $.getJSON('/renewablesByIndex/' + indexInput, function (response) {
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

    function getRenewableByYear() {
        var yearInput = $('#InputAsYear').val();
        console.log('getRenewableByYear called');

        $.getJSON('/renewablesByYear/' + yearInput, function (response) {
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
});

