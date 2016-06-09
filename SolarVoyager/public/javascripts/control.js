define(['jquery', 'home', 'about',
        'renewables', 'renewablesByIndex', 'renewablesByYear', 'energyOverview', 'energyTypes'
    ],
    function($, home, about, renewables, renewablesByIndex, renewablesByYear,
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
            setup: function() {
                $(document).on('click', '#showClick', showBar);
                $('#display2').html(control.color + ' , ' + control.size);
            },
            init: function() {
                //console.log(this.color);
                $('#aboutMenu').click(about.init);
                $('#homeMenu').click(home.init);
                $('#renewablesMenu').click(renewables.init);
                $('#renewablesByIndexMenu').click(renewablesByIndex.init);
                $('#renewablesByYearMenu').click(renewablesByYear.init);
                $('#highTechEnergyOverviewMenu').click(energyOverview.init);
                $('#highTechEnergyTypesMenu').click(energyTypes.init);
                $('#aboutButton').click(about.init);
                $('#homeButton').click(home.init);
                $('#renewablesButton').click(renewables.init);
                $('#renewablesByIndexButton').click(renewablesByIndex.init);
                $('#renewablesByYearButton').click(renewablesByYear.init);
                $('#highTechEnergyOverviewButton').click(energyOverview.init);
                $('#highTechEnergyTypesButton').click(energyTypes.init);

                //$('#insertValidData').click(renewables);
                //$('#getAll').click(renewables);
                //$('#emptyCollection').click(renewables);

                home.init();
                //$('elf-view').load('/main', this.setup);
            }
        };

        return control;
    });

$(document).ready(function() {
    'use strict';
    $('.navbar-nav li.trigger-collapse a').click(function(event) {
        $('.navbar-collapse').collapse('hide');
    });
});
