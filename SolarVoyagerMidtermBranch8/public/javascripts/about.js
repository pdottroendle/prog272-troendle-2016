/**
 * Created by bcuser on 5/21/16.
 */
define(function() {
    'use strict';
    var about = {
        color: 'Green',
        size: 'LittleGreen',
        init: function() {
            console.log(about.color);
            //var that = this;
            $('#elf-view').load('/about', function() {
                $('#display').html(about.color + ' ' + about.size);
            });
        }
    };
    return about;

});