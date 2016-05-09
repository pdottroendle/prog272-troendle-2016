function getNine() {
    return 9;
}

function getThisStrict() { 'use strict'
    return this;
}

var getThisAnonymous = function(){
  return this;
};

var myObject = {
   getThis: function() {
       return this;
   }
};

$(document).ready(function() { 'use strict';
});
