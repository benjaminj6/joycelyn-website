let assembleFile = require('../../assemble-file-template');
let html = require('./parent-education');
let data = require('../../data/parent-education-data');

var app = assembleFile(html, data, '../../public/parent-education'); 

module.exports = app;	