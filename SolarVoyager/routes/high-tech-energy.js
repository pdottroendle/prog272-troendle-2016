/**
 * Created by bcuser on 6/1/16.
 */

var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(request, response) {
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
router.get('/:id', function(request, response) {
    'use strict';
    console.log('high-tech-energy page called');
    response.render('high-tech-energy/' + request.params.id, {
        title: 'ElfComponent'
    });
});

module.exports = router;
