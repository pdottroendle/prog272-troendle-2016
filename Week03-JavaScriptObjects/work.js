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
