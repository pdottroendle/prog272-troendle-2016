define(['jquery', 'home', 'about', 'renewables', 'renewablesByIndex',
        'renewablesByYear', 'energyOverview', 'energyTypes'
    ],
    function($, home, about, renewables, renewablesByIndex, renewablesByYear,
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
            setup: function() {
                $(document).on('click', '#showClick', showBar);
                $('#display2').html(control.color + ' - ' + control.size);
            },
            init: function() {
                //console.log(this.color);
                $('#aboutButton').click(about.init);
                $('#homeButton').click(home.init);
                $('#renewablesButton').click(renewables.init);
                $('#renewablesByIndexButton').click(renewablesByIndex.init);
                $('#renewablesByYearButton').click(renewablesByYear.init);
                $('#highTechEnergyOverviewButton').click(energyOverview.init);
                $('#highTechEnergyTypesButton').click(energyTypes.init);

                home.init();
                $('elf-view').load('/main', this.setup);
            }
        };

        return control;
    });
