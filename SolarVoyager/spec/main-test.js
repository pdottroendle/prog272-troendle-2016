/**
 * @author Charlie Calvert
 */

/**
 * Created by bcuser on 5/25/16.
 */


function loadTestsIntoArray() {
    var tests = [];
    for (var file in window.__karma__.files) {
        if (/test-/.test(file)) {
            console.log('Loaded test:', file);
            tests.push(file);
        }
    }
    return tests;
}

require.config({
    baseUrl: '/base',

    paths: {
        control: 'public/javascripts/control',
        home: 'public/javascripts/home',
        renewables: 'public/javascripts/renewables/renewables',
        //home
        //renewablesmsnTypes
        //about
        //clientRenewables
        // THE REST LEFT AS AN EXERCISE
    },
    deps: loadTestsIntoArray(),
    callback: window.__karma__.start
});

