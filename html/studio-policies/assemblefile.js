let assembleFile = require('../../assemble-file-template');
let html = require('./studio-policies');
let data = require('./studio-policies-data');

var app = assembleFile(html, data, '../../public/studio-policies'); 

module.exports = app;	