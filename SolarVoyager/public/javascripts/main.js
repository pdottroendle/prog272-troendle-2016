//script(src="components/jquery/dist/jquery.js")
//script(src="components/bootstrap/dist/js/bootstrap.js")
//script(src="javascripts/control.js")

requirejs.config({
    baseUrl: '.',
    paths: {
        jquery: 'components/jquery/dist/jquery',
        bootstrap: 'components/bootstrap/dist/js/bootstrap',
        control: 'javascripts/control',
        work: 'javascripts/work',
        about: 'javascripts/about',
        renewables: 'javascripts/renewables',
        renewablesByIndex: 'javascripts/renewables-index',
        renewablesByYear: 'javascripts/renewables-year'
    }
});

requirejs(['jquery', 'work', 'about'], function ($, work, about) {

    requirejs(['bootstrap', 'control'], function (bootstrap, control) {
        control.init();
    });
});