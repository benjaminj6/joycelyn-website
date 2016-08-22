let assembleFile = require('../../assemble-file-template');
let html = require('./teaching-philosophy');
let data = require('../../data/teaching-philosophy-data');

var app = assembleFile(html, data, '../../public/teaching-philosophy'); 

module.exports = app;	