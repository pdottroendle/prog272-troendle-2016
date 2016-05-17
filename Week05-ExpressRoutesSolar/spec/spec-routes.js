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


    //it('shows we can get renewables objects by index', function (done) {
    //   request(app)
    //       .get('/renewablesByIndex/0')
    it('renewables first object body', function (done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function (response) {
                expect(response.body.result).toBe('Success');
                console.log(response.body.renewables);
                expect(response.body.renewables[0].Year).toBe('2017');
            })
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

    it('shows we can call renewableByIndex route and can get a single renewable object by Index', function (done) {
        request(app)
            .get('/renewablesByIndex/1')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function (response) {
                expect(response.body.result).toBe('Success');
                //console.log(response.body.renewables);
                expect(response.body.renewables.Year).toBe('2016');
            })
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

    it('call renewableByYear and get renewable object with specific year', function (done) {
        request(app)
            .get('/renewablesByYear/2016')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function (response) {
                // console.log('expect called');
                expect(response.body.result).toBe('Success');
                //console.log(response.body.renewables);
                var renewable = response.body.renewable;
                expect(renewable.Year).toBe('2016');
            })
            .end(function (err, res) {
                if (err) {
                    throw err;
                }
                done();
            });
    });

});