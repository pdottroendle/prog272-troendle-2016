/**
 * Created by bcuser on 5/21/16.
 */
define(function() {
    'use strict';
    console.log('home.js');
    var home = {
        color: 'red',
        size: 'big',
        init: function() {
            $('#elf-view').load('/home', function() {
                $('#display').html(home.color);
                $('#display2').html(home.size);
            });
        }
    };
    return home;
});
