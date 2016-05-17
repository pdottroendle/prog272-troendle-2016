$(document).ready(function () {
    'use strict';

    $('#getRenewable').click(getRenewable);
    $('#getRenewablebyIndex').click(getRenewableByIndex);
    $('#getRenewablebyYear').click(getRenewableByYear);


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
        console.log('getRenewableByIndex called');

        var userInput = $('# renewableByIndex').val();


            $.getJSON('/renewableByIndex/'+ userInput, function (response) {
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
        console.log('getRenewableByYear called');

        var userInput = $('# renewableByYear').val();


        $.getJSON('/renewableByYear/'+ userInput, function (response) {
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


define(['jquery'], function($) {
        //Do setup work here

        function showBar() {
            //console.log('Show Bar Clicks called now');
            $('#display2').html('bar');
        }

        var control = {
            color: "black",
            size: "unisize",
            setup: function() {
                $(document).on('click', '#showClick', showBar);
                $('#display2').html(control.color + ' - ' + control.size);
            },
            init: function() {
                //console.log(this.color);
                that = this;
                $('#aboutButton').click(about.init);
                $('#workButton').click(work.init);
                $('#elf-view').load('/main', this.setup);
            }
        };

        return control;
    });