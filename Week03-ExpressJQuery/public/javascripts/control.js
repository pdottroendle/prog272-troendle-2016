/**
 * Created by bcuser on 4/20/16.
 */
var MyObject = (function() {

    // CONSTRUCTOR
    function MyObject() {
        $('#sendString').click(showString);
        $('#getItems').click(showItems);
        $('#getMarie').click(showMarie);
    }

    function showItems() {
        $("#myList").append('<li>' + 'item01' + '</li>');
        $("#myList").append('<li>' + 'item02' + '</li>');
        $("#myList").append('<li>' + 'item03' + '</li>');
    }

    function showMarie() {
        /*var marie = {
            "firstName": "Marie",
            "lastName": "Curie",
            "city": "Paris",
            "country": "France"
        }*/
        $.getJSON("marie.json", function (marie) {
            console.log(marie);

            for (var property in marie) {
              if (marie.hasOwnProperty(property)) {
                $("#myList2").append('<li>' + marie[property] + '</li>');
              }
            }

        });
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
});