define(['jquery', 'home', 'about', 'renewables', 'renewablesByIndex',
        'renewablesByYear', 'energyOverview', 'energyTypes'
    ],
    function ($, home, about, renewables, renewablesByIndex, renewablesByYear,
              energyOverview, energyTypes) {
        'use strict';

        function showBar() {
            //console.log('Show Bar Clicks called now');
            $('#display2').html('bar');
        }

        var control;
        control = {
            color: 'black',
            size: 'unisize',
            setup: function () {
                $(document).on('click', '#showClick', showBar);
                $('#display2').html(control.color + ' - ' + control.size);
            },
            init: function () {
                //console.log(this.color);
                $('#aboutMenu').click(about.init);
                $('#homeMenu').click(home.init);
                $('#renewablesMenu').click(renewables.init);
                $('#renewablesByIndexMenu').click(renewablesByIndex.init);
                $('#renewablesByYearMenu').click(renewablesByYear.init);
                $('#highTechEnergyOverviewMenu').click(energyOverview.init);
                $('#highTechEnergyTypesMenu').click(energyTypes.init);

                home.init();
                $('elf-view').load('/main', this.setup);
            }
        };

        return control;
    });

/*
$(document).ready(function() {
    'use strict';
    $('.navbar-nav li.trigger-collapse a').click(function(event) {
        $('.navbar-collapse').collapse('hide');
    });
});
*/