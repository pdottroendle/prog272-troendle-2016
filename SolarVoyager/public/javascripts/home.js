//define(['jquery', 'settings'], function ($, settings) {
define(['settings'], function(settings) {

   /* var settings2 = {
        dataType: 'Database',
        dataSource: 'Local MongoDb',
        comment: 'Default Comment'
    };

    settings.setSettings({response});
       dataType: 'Database',
       dataSource: 'Local MongoDb',
       comment: 'Default Comment'
     }); */

    //define(function() {
        'use strict';

        function getSettings() {
            $.getJSON('/databaseSettings/getSettings', function(response) {
                    $('#debug').html(JSON.stringify(response, null, 4));
                    //$('#dataType').val(response.settings.dataType);
                    //$('#dataSource').val(response.settings.dataSource);
                    //$('#comment').val(response.settings.comment);
                    //settings.setSettings(response.settings);
                    // via server, its not needed the client decides ad hoc
                })
                .fail(function(a, b, c) {
                    console.log('Error', a, b, c);
                    $('#debug').html('Error occured: ', a.status);
                })
                .done(function() {
                    console.log('second success');
                })
                .always(function() {
                    console.log('complete');
                });
        }

        var home = {
            color: 'red',
            size: 'big',
            init: function() {
                console.log(home.color);
                $('#elf-view').load('/home', function() {
                    $('#display').html(home.color);
                    $('#display2').html(home.size);
                    //getSettings();
                    $('#target').submit(function(event) {
                        event.preventDefault();
                        var userFormData = $(this).serialize();
                        $('#debug').html(userFormData);
                        var userData = {
                            dataType: $('#dataType').val(),
                            dataSource: $('#dataSource').val(),
                            comment: $('#comment').val()
                        };
                        settings.setSettings(userData);

                        // taking the user data and passes it over to the server here?
                        $.post('/databaseSettings/updateSettings', userData, function(result) {
                            getSettings();
                            console.log(settings);
                        });
                    });

                });
            }
        };
        return home;
    });