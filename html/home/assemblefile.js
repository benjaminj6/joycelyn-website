let assembleFile = require('../../assemble-file-template');
let html = require('./home');
let data = require('./home-data');

var app = assembleFile(html, data, '../../public/home'); 

module.exports = app;	