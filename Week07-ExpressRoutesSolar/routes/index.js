var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
    'use strict';
    res.render('index', {title: 'Week07-ExpressRoutesSolar Deeper Troendle'});
});

router.get('/renewables', function (request, response) {
    'use strict';
    console.log('Renewables called');

    fs.readFile('data/Renewable.json', 'utf8', function (err, data) {
        if (err) {
            // response.send(err, 404);
            response.status(404).send(err);
        } else {
            var json = JSON.parse(data);
            //console.log(json);
            response.send({
                result: 'Success',
                renewables: json
            });
        }
    });

});

router.get('/renewablesByIndex/:id', function (request, response) {
    'use strict';
    console.log('Renewables By Index called', request.params.id);

    fs.readFile('data/Renewable.json', 'utf8', function (err, data) {
        if (err) {
            // response.send(err, 404);
            response.status(404).send(err);
        } else {
            var json = JSON.parse(data);
            //console.log(json);
            response.send({
                result: 'Success',
                renewables: json[parseInt(request.params.id)]
            });
        }
    });
});

router.get('/renewablesByYear/:id', function (request, response) {
    'use strict';
    console.log('Renewables By Year called', request.params.id);

    fs.readFile('data/Renewable.json', 'utf8', function (err, data) {
        if (err) {
            // response.send(err, 404);
            response.status(404).send(err);
        } else {
            var json = JSON.parse(data);

            for (var i = 0; i < json.length; i++) {
                if (request.params.id === json[i].Year) {
                    console.log(json[i].Year);
                    response.send({
                        result: 'Success',
                        renewables: json[i]
                    });
                    return;
                }
            }

            response.send({
                result: 'Failure',
                renewables: null
            });
        }
    });

});

router.get('/renewablesByIndexSorted/:id', function (request, response) {

    'use strict';
    console.log('Renewables By Index Sorted called', request.params.id);

    fs.readFile('data/Renewable.json', 'utf8', function (err, data) {
        if (err) {
            // response.send(err, 404);
            response.status(404).send(err);
        } else {
            var json = JSON.parse(data);   //energyUtils.objectToArray
            //console.log(json);
            response.send({
                result: 'Success',  //return the array built in the call to objectToArray
                renewables: json[parseInt(request.params.id)]
            });
        }
    });
});

router.get('/:id', function(request, response) {
    response.render(request.params.id, { title: 'ElfComponent' });
});

module.exports = router;

