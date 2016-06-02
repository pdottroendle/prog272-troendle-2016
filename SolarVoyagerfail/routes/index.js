var express = require('express');
var router = express.Router();
// var fs = require('fs');    week09
var energyUtils = require('../routes/energy-utils.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'Week08-ExpressRoutesSolar Midterm Troendle'
    });
});

/*
router.get('/renewables', function(request, response) {
    'use strict';
    console.log('Renewables called');

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
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



router.get('/renewablesByIndex/:id', function(request, response) {
    'use strict';
    console.log('Renewables By Index called', request.params.id);

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
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

router.get('/renewablesByYear/:id', function(request, response) {
    'use strict';
    console.log('Renewables By Year called', request.params.id);

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        if (err) {
            // response.send(err, 404);
            response.status(404).send(err);
        } else {
            var json = JSON.parse(data);

            for (var i = 0; i < json.length; i++) {
                if (json[i].Year === request.params.id) {
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

router.get('/renewablesByIndexSorted/:id', function(request, response) {
    'use strict';
    console.log('Renewables By Index Sorted called', request.params.id);

    fs.readFile('data/Renewable.json', 'utf8', function(err, data) {
        if (err) {
            // response.send(err, 404);
            response.status(404).send(err);
        } else {
            var json2 = JSON.parse(data);
            var json1 = json2[parseInt(request.params.id)];
            var json = energyUtils.objectToArray(json1);
            console.log(json);
            console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxx');
            response.send({
                result: 'Success', //return the array built in the call to objectToArray
                renewables: json2[parseInt(request.params.id)]
            });
        }
    });
}); */
/*
router.get('/high-tech-energy', function(request, response) {
    'use strict';
    console.log('high-tech-energy called');

    fs.readFile('data/HighTechEnergy.json', 'utf8', function(err, data) {
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
router.get('/high-tech-energy/:id', function(request, response) {
    'use strict';
    console.log('high-tech-energy page called');
    response.render('high-tech-energy/' + request.params.id, {
        title: 'ElfComponent'
    });
});

router.get('/renewables/:id', function(request, response) {
    'use strict';
    response.render('renewables/' + request.params.id, {
        title: 'ElfComponent'
    });
});
*/
router.get('/:id', function(request, response) {
    'use strict';
    response.render(request.params.id, {
        title: 'ElfComponent'
    });
});

module.exports = router;
