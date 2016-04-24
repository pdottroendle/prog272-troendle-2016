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
    operator01: 6,
    operator02: 10,
    addMe: function() {
        return this.operator01 + this.operator02;
    },
    subMe: function() {
        return this.operator01 - this.operator02;
    },
    mulMe: function() {
        return this.operator01 * this.operator02;
    },
    divMe: function() {
        return this.operator01 / this.operator02;
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
console.log('operator01 =', calculator.operator01);
console.log('operator02 =', calculator.operator02);

sublayout('Adder');
console.log(calculator.addMe());
sublayout('Subtractor');
console.log(calculator.subMe());
sublayout('Multiplyier');
console.log(calculator.mulMe());
sublayout('Divider');
console.log(calculator.divMe());

layout('Thank You!');
