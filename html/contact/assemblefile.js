let assembleFile = require('../../assemble-file-template');
let html = require('./contact');
let data = require('./contact-data.js');

var app = assembleFile(html, data, '../../public/contact/'); 

module.exports = app;	