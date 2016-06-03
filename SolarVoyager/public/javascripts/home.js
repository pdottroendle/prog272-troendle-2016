/**
 * Created by bcuser on 5/21/16.
 */
define(function () {
    'use strict';
    console.log('home.js');
    var home = {
        project: 'Midterm " The Solar Voyager " handling Energy data',
        supervision: 'PROG 272 instructor Charles Calvert',
        init: function () {
            $('#elf-view').load('/home', function () { //r
                $('#display').html(home.project);
                $('#display2').html(home.supervision);
            });
        }
    };
    return home;
});
