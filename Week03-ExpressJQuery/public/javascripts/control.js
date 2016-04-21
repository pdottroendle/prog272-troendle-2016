/**
 * Created by bcuser on 4/20/16.
 */
var MyObject = (function() {

    // CONSTRUCTOR
    function MyObject() {
        $('#sendString').click(showString);
        $('#getItems').click(showItems);
    }

    function showItems() {
        $("#myList").append('<li>' + 'item01' + '</li>');
        $("#myList").append('<li>' + 'item02' + '</li>');
        $("#myList").append('<li>' + 'item03' + '</li>');
    }

    function showString() {
        $('#stringHolder').html('Send string was clicked');
    }


    MyObject.prototype.readyCalled = function() {
        $("#readyCalled").html("Ready was called and myObjected created");
    };

    return MyObject;
}());

// EVENT PAGE LOAD
$(document).ready(function() {
    var myObject = new MyObject();
    myObject.readyCalled();
    myObjects.showItems();
});
