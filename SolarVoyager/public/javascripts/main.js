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
        about: 'javascripts/about',
        renewables: 'javascripts/renewables/renewables',
        renewablesByIndex: 'javascripts/renewables/renewables-index',
        renewablesByYear: 'javascripts/renewables/renewables-year',
        energyOverview: 'javascripts/energy-utils/energy-utils-overview',
        energyTypes: 'javascripts/energy-utils/energy-utils-types'
    }
});

requirejs(['jquery'], function ($) {

    requirejs(['bootstrap', 'control'], function (bootstrap, control) {
        control.init();
    });
});
