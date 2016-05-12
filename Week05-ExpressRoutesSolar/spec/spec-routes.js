/**
 * Created by bcuser on 5/9/16.
 */

var request = require('supertest');
var app = require('../app');

describe('Elvenware Spec Routes Suite', function () {
    'use strict';

    it('shows we can test', function () {
        expect(true).toBe(true);
    });


    it('get the renewables routes', function (done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });


    it('shows we can get renewables objects by index', function (done) {
        request(app)
            .get('/renewablesByIndex/0')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function (response) {
                expect(response.body.result).toBe('Success');
                //    console.log(response.body.renewables);
                expect(response.body.renewables.Year).toBe('2017');
            })
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });


    it('shows we can get renewables objects by index', function (done) {
        request(app)
            .get('/renewablesByYear/2017')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function (response) {
                expect(response.body.result).toBe('Success');
                //    console.log(response.body.renewables);
                expect(response.body.renewables.Year).toBe('2017');
            })
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

});


