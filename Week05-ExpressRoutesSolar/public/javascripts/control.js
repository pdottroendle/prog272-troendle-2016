$(document).ready(function () {
    'use strict';
    'use strict';

    $('#getRenewable').click(getRenewable);

    function getRenewable() {
        console.log('getRenewable called');

        $.getJSON('/renewables', function (response) {
            console.log(response);
            $('#debug').html(JSON.stringify(response, null, 4));
        })
            .done(function () {
                console.log("second success");
            })
            .fail(function (a, b, c) {
                console.log('Error', a, b, c);
                $('#debug').html('Error occured: ', a.status);
            })
            .always(function () {
                console.log("complete");

            });
    }
});
