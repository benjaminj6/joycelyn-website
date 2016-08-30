let assembleFile = require('../../assemble-file-template.js');
let html = require('./bio');
let data = require('./bio-data');

let app = assembleFile(html, data, '../../public/bio');

module.exports = app;