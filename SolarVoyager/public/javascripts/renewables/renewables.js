define(function () {

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

    var renewables = {
        color: "red",
        size: "big",
        init: function () {
            console.log(renewables.color);
            $('#elf-view').load('/renewables/renewables-page', function () {  //r
                $('#display').html(renewables.color);
                $('#display2').html(renewables.size);
                getRenewable();
            });
        }
    };
    return renewables;
});