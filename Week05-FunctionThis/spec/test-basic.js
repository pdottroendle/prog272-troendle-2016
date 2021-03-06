/**
 * Created by charlie on 10/7/15.
 */

describe('Elvenware Simple Plain Suite', function () {

    'use strict';

    fit('expects true to be true', function () {
        expect(true).toBe(true);
    });

    fit('expects getNine to return 9', function () {
        var result = getNine();
        expect(result).toBe(9);
    });

    fit('expects a simple function called getThis to set this is the window object', function () {
        var result = getThis();
        expect(result).toBe(window);
    });//

    fit('expects a simple anonymous function to set this to the window object', function () {
        var result = getThisAnonymous();
        expect(result).toBe(window);
    });

    fit('expects a method of myObject called getThis to show this is myObject', function () {
        var result = myObject.getThis();
        expect(result).toBe(myObject);
    });

    fit('expects a method of myFunction called getThis to show this is myFunction', function () {
        var result = myFunction.getThis();
        expect(result).toBe(myFunction);
    });

    fit('expects a constructor function called MyFunction to have a public method called getThis that shows this is MyFunction', function () {
        var myFunction = new MyFunction();
        var result = myFunction.getThis();
        expect(result).toBe(myFunction);
    });

    fit('shows you can set the this operator for getThis to myObject', function () {
        var result = getThis.call(myObject);
        expect(result).toBe(myObject);
    });

    fit('shows that return this from a simple strict function returns undefined', function () {
        var result = getThisStrict();
        expect(typeof result).toBe('undefined');
    });
});
