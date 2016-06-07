/**
 * Created by bcuser on 5/21/16.
 */
define(function() {
    'use strict';
    console.log('about.js');
    var about = {
        college: 'Bellevue College',
        location: 'Bellevue, WA',
        init: function() {
            $('#elf-view').load('/about', function() {
                $('#display').html(about.college + ' , ' + about.location);
            });
        }
    };
    return about;

});
