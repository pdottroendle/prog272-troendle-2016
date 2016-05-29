define(['jquery', 'home', 'about', 'renewables', 'renewablesByIndex', 'renewablesByYear', 'energyOverview', 'energyTypes'],
    function ($, home, about, renewables, renewablesByIndex, renewablesByYear, energyOverview, energyTypes) {

        function showBar() {
            //console.log('Show Bar Clicks called now');
            $('#display2').html('bar');
        }

        var control;
        control = {
            color: "black",
            size: "unisize",
            setup: function () {
                $(document).on('click', '#showClick', showBar);
                $('#display2').html(control.color + ' - ' + control.size);
            },
            init: function () {
                //console.log(this.color);
                $('#homeButton').click(home.init);
                $('#renewablesButton').click(renewables.init);
                $('#renewablesByIndexButton').click(renewablesByIndex.init);
                $('#renewablesByYearButton').click(renewablesByYear.init);
                $('#highTechEnergyOverviewButton').click(energyOverview.init);
                $('#highTechEnergyTypesButton').click(energyTypes.init);

                home.init();
                //$('elf-view').load('/main', this.setup);
            }
        };

        return control;
    });

/*  $(document).ready(function () {
 'use strict';

 $('#getRenewable').click(getRenewable);
 $('#getByIndex').click(getRenewableByIndex);
 $('#getByYear').click(getRenewableByYear);

 function getRenewable() {
 console.log('getRenewable called');
 $.getJSON('/renewables', function (response) {
 console.log(response);
 $('#debug').html(JSON.stringify(response, null, 4));
 })
 .done(function () {
 console.log('second success');
 })
 .fail(function (a, b, c) {
 console.log('Error', a, b, c);
 $('#debug').html('Error occured: ', a.status);
 })
 .always(function () {
 console.log('complete');
 });
 }

 function getRenewableByIndex() {
 var indexInput = $('#inputByIndex').val();
 console.log('getRenewableByIndex called', indexInput);

 $.getJSON('/renewablesByIndex/' + indexInput, function (response) {
 console.log(response);
 $('#debug').html(JSON.stringify(response, null, 4));
 })
 .done(function () {
 console.log('second success');
 })
 .fail(function (a, b, c) {
 console.log('Error', a, b, c);
 $('#debug').html('Error occured: ', a.status);
 })
 .always(function () {
 console.log('complete');
 });
 }

 function getRenewableByYear() {
 var yearInput = $('#inputByYear').val();
 console.log('getRenewableByYear called');

 $.getJSON('/renewablesByYear/' + yearInput, function (response) {
 console.log(response);
 $('#debug').html(JSON.stringify(response, null, 4));
 })
 .done(function () {
 console.log('second success');
 })
 .fail(function (a, b, c) {
 console.log('Error', a, b, c);
 $('#debug').html('Error occured: ', a.status);
 })
 .always(function () {
 console.log('complete');
 });
 }
 });

 */
