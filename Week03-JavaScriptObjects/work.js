function divider(title) {
	console.log("====================================");
	console.log(title);
	console.log("====================================");
}

var personTest01 = { 'name': 'Suzie' };
var personTest02 = {};
personTest02.name = 'Suzie';


divider('Person Test');
console.log('PersonTest01.name:', personTest01.name);
console.log('PersonTest02.name:', personTest02.name);

var person = {
    firstName: 'George',
    lastName: 'Washington',

    fullName: function() {
        'use strict';
        return this.firstName + ' ' + this.lastName;
    }
};

person.sayGoodbye = function() {
	'use strict';
	console.log('Goodbye');
}

// console.log(person);
divider('Person');
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());
//person.firstName = 'cadmus';
//console.log(person.fullName());

/*****************************
 * Calculator
 ****************************/

var calculator = {

    operator01: 0,
    operator02: 0,

    add: function() {
        'use strict';
        return this.operator01 + this.operator02;
    },

    subtract: function() {
        'use strict';
        return this.operator01 - this.operator02;
    }
};

calculator.operator01 = person.firstName.length;
calculator.operator02 = person.lastName.length;

calculator.multiply = function() {
    'use strict';
    return this.operator01 * this.operator02;
};

divider('Calculator');
console.log('operator01 =', calculator.operator01);
console.log('operator02 =', calculator.operator02);
console.log('Add: ', calculator.add());
console.log('Subtract:', calculator.subtract());
console.log('Multiply:', calculator.multiply());

person.sayGoodbye();

/*    my version was, the above is the version from our instructor
#!/usr/bin/env node

var myObject01 = {
    firstName: 'Susi',
    lastName: 'Smooth'
};

var myObject02 = {
    firstName: 'Susi',
    lastName: 'Smooth',
    fullName: function() {
        'use strict';
        return this.firstName + ' ' + this.lastName;
    }
};

var calculator = {
    addMe: function(operator01,operator02) {
        return operator01 + operator02;
    },
    subMe: function(operator01,operator02) {
        return operator01 - operator02;
    },
    mulMe: function(operator01,operator02) {
        return operator01 * operator02;
    },
    divMe: function(operator01,operator02) {
        return operator01 / operator02;
    }
};

function layout(title) {
    console.log('');
    console.log('====================================');
    console.log(title);
    console.log('====================================');
}

function sublayout(title) {
    console.log('................................');
    console.log(title);
}

layout('Names');
console.log(myObject01.firstName);
console.log(myObject01.lastName);
console.log(myObject02.fullName());

layout('Calculator');

sublayout('Adder 1 + 2');
console.log(calculator.addMe(1,2));
sublayout('Subtractor 3 - 4');
console.log(calculator.subMe(3,4));
sublayout('Multiplyier 5 * 6');
console.log(calculator.mulMe(5,6));
sublayout('Divider 7/8');
console.log(calculator.divMe(7,8));

layout('Thank You!');


*/
