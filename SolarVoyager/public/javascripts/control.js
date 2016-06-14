define(['jquery', 'home', 'about', 'database',
        'renewables', 'renewablesIndex', 'renewablesYear', 'energyOverview', 'energyTypes'
    ],
    function ($, home, about, database, renewables, renewablesIndex, renewablesYear,
              energyOverview, energyTypes) {
        'use strict';
        console.log('control.js');

        function showBar() {
            //console.log('Show Bar Clicks called now');
            $('#display2').html('control');
        }

        var control;
        control = {
            color: 'purple',
            size: 'unisize',
            setup: function () {
                $(document).on('click', '#showClick', showBar);
                $('#display2').html(control.color + ' , ' + control.size);
            },
            init: function () {
                //console.log(this.color);
                $('#aboutMenu').click(about.init);
                $('#homeMenu').click(home.init);
                $('#renewablesMenu').click(renewables.init);
                $('#renewablesByIndexMenu').click(renewablesIndex.init);
                $('#renewablesByYearMenu').click(renewablesYear.init);
                $('#highTechEnergyOverviewMenu').click(energyOverview.init);
                $('#highTechEnergyTypesMenu').click(energyTypes.init);
                $('#aboutButton').click(about.init);
                $('#homeButton').click(home.init);
                $('#renewablesButton').click(renewables.init);
                $('#renewablesByIndexButton').click(renewablesIndex.init);
                $('#renewablesByYearButton').click(renewablesYear.init);
                $('#highTechEnergyOverviewButton').click(energyOverview.init);
                $('#highTechEnergyTypesButton').click(energyTypes.init);

                $('#databaseButton').click(database.init);
                $('#databaseMenu').click(database.init);

                home.init();
                //$('elf-view').load('/main', this.setup);
            }
        };

        return control;
    });

$(document).ready(function () {
    'use strict';
    $('.navbar-nav li.trigger-collapse a').click(function (event) {
        $('.navbar-collapse').collapse('hide');
    });
});
