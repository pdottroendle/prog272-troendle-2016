/**
 * Created by bcuser on 5/21/16.
 */

define(function() {
    var work = {
        color: "red",
        size: "big",
        init: function() {
            console.log(work.color);
            $('#elf-view').load('/work', function() {  //r
                $('#display').html(work.color);
                $('#display2').html(work.size);
            });
        }
    };
    return work;
});
