var express = require('express');
var router = express.Router();
// var fs = require('fs');    week09

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {
        title: 'Week10-Routes Solar Finals Troendle'
    });
});

router.get('/:id', function(request, response) {
    'use strict';
    response.render(request.params.id, {
        title: 'ElfComponent'
    });
});

module.exports = router;
