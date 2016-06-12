var mongoose = require('mongoose');

var presidentsSchema = mongoose.Schema({
"firstName": String,
"lastName": String,
});

module.exports = mongoose.model('presidents', presidentsSchema);