let assembleFile = require('../../assemble-file-template');
let html = require('./blog');
let data = require('./blog-data');

module.exports = assembleFile(html, data, '../../public/blog');	