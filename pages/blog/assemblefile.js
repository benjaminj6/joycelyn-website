let assembleFile = require('../../assemble-file-template');
let html = require('./blog');
let data = require('../../data/blog-data');

var app = assembleFile(html, data, '../../public/blog'); 

module.exports = app;	