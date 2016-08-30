let assembleFile = require('../../assemble-file-template');
let html = require('./suzuki-method');
let data = require('./suzuki-method-data');

var app = assembleFile(html, data, '../../public/suzuki-method'); 

module.exports = app;	