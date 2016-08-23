let assembleFile = require('../../assemble-file-template');
let html = require('./suzuki-method');
let data = require('../../data/suzuki-method-data');

var app = assembleFile(html, data, '../../public/suzuki-method'); 

module.exports = app;	