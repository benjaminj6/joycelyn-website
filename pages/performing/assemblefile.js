let assembleFile = require('../../assemble-file-template');
let html = require('./performing');
let data = require('../../data/performing-data');

var app = assembleFile(html, data, '../../public/performing'); 

module.exports = app;	