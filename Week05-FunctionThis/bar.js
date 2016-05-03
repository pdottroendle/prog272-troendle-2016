function getNine(){
console.log(this);
return 9;
}

$(document).ready( function(){ 'use strict';
console.log(getNine());
});