/**
 * Created by bcuser on 4/25/16.
 */
$(document).ready(function() {
    console.log('Document loaded in prog 272');

    $('#read').click(callRead);
    $('#readJson').click(callReadJson);
    $('#readQux').click(callReadQux);
    $('#add').click(add);

    function add() {
        var operatorA = $('#operatorA').val();
        var operatorB = $('#operatorB').val();
        console.log('operators:' , operatorA, operatorB);
        var requestQuery = { operatorA:  operatorA, operatorB: operatorB };
        
        $.getJSON('/add', requestQuery, function(sum) {
            console.log("Sum:", sum);
            $('#display').html('The sum is:' + sum.sum);
        });
    }

    function callRead(){
    console.log('Button clicked in prog 272');
        $.getJSON('http://localhost:30025/read', function(result){
            console.log(result);
            $('#display').html(JSON.stringify(result));
        })
    }

    function callReadJson(){
        console.log('Button clicked JSON in prog 272');
        $.getJSON('names.json', function(result){
            console.log(result);
            $('#display').html(JSON.stringify(result));
        })
    }

    function callReadQux(){
        console.log('Button clicked Qux in prog 272');
        $.getJSON('./Qux', function(result){
            console.log(result);
            $('#display').html(JSON.stringify(result));
        })
    }
    
    
});