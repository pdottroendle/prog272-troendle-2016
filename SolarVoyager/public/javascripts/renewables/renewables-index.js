/**
 * Created by bcuser on 5/22/16.
 */
$("#renewableByIndex").change(function () {
    getRenewableByIndex();
});


define(function () {

    function getRenewableByIndex() {
        var indexInput = $('#inputByIndex').val();
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


    var renewablesByIndex = {
        color: "red",
        size: "big",
        init: function () {
            console.log(renewablesByIndex.color);
            $('#elf-view').load('/renewables/renewables-by-index-page', function () {  //r
                $('#display').html(renewablesByIndex.color);
                $('#display2').html(renewablesByIndex.size);
                $('#renewableByIndex').change(function () {
                    getRenewableByIndex();
                });
                getRenewableByIndex();
            });
        }
    };
    return renewablesByIndex;
});