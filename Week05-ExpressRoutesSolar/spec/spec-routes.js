/**
 * Created by bcuser on 5/9/16.
 */

var request = require('supertest');
var app = require('../app');

describe('Elvenware Simple Plain Suite', function () {
    fit('shows we can test', function () {
        expect(true).toBe(true);
    });


    fit('renewables', function (done) {
        request(app)
            .get('/renewables')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                if (err) throw err;
                done();
            });
    });

});

fit('renewables first object body', function (done) {
    request(app)
        .get('/renewables')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(response) {
            expect(response.body.result).toBe('Success');
            console.log(response.body.renewables);
            expect(response.body.renewables[0].Year).toBe('2017');
        })
        .end(function (err, res) {
            if (err) throw err;
            done();
        });
});