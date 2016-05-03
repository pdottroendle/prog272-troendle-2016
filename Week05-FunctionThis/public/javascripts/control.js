function getNine() {
    return 9;
}

function getThis() {
    return this;
}

var getThisAnonymous = function(){
  return this;
};

var myObject = {  'use strict'
   getThis: function() {
       return this;
   }
};

$(document).ready(function() { 'use strict';
});
