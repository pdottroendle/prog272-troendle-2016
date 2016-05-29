/**
 * Created by bcuser on 5/21/16.
 */

define(function() {
    var home = {
        color: "red",
        size: "big",
        init: function() {
            console.log(home.color);
            $('#elf-view').load('/home', function() { //r
                $('#display').html(home.color);
                $('#display2').html(home.size);
            });
        }
    };
    return home;
});
