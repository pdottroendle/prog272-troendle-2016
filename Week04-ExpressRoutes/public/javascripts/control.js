/**
 * Created by bcuser on 4/25/16.
 */
$(document).ready(function() {
    console.log('Document loaded in prog 272');

    $('#read').click(callRead);
    $('#readJson').click(callReadJson);
    $('#readQux').click(callReadQux);

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