let assembleFile = require('../../assemble-file-template');
let html = require('./contact');
let data = require('../../data/contact-data');

var app = assembleFile(html, data, '../../public/contact'); 

module.exports = app;	