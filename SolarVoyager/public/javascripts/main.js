//script(src="components/jquery/dist/jquery.js")
//script(src="components/bootstrap/dist/js/bootstrap.js")
//script(src="javascripts/control.js")

requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'components/jquery/dist/jquery',
        bootstrap: 'components/bootstrap/dist/js/bootstrap',
        control: 'javascripts/control',
        home: 'javascripts/home',
        database: 'javascripts/database',
        about: 'javascripts/about',
        renewables: 'javascripts/renewables/renewables',
        renewablesIndex: 'javascripts/renewables/renewables-index',
        renewablesYear: 'javascripts/renewables/renewables-year',
        energyOverview: 'javascripts/high-tech-energy/energy-overview',
        energyTypes: 'javascripts/high-tech-energy/energy-types',
        settings: 'javascripts/settings',
        msnTypes: 'javascripts/high-tech-energy/msn-types'
    }
});

requirejs(['jquery'], function ($) {
    'use strict';
    requirejs(['bootstrap', 'control'], function (bootstrap, control) {
        control.init();
    });
});
