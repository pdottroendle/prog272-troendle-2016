define(function() {
    'use strict';

    function getRenewableByYear() {
        var yearInput = $('#renewableByYear').val();

        console.log('getRenewableByYear called');

        $.getJSON('/renewablesByYear/' + yearInput, function(response) {
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

    var renewablesByYear = {
        color: 'red',
        size: 'big',
        init: function() {
            console.log(renewablesByYear.color);
            $('#elf-view').load('/renewables/renewables-by-year-page', function() { //r
                $('#display').html(renewablesByYear.color);
                $('#display2').html(renewablesByYear.size);
                $('#renewableByYear').change(function() {
                    getRenewableByYear();
                });
                getRenewableByYear();
            });
        }
    };
    return renewablesByYear;
});
