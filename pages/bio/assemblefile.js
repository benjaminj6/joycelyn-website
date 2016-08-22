let assembleFile = require('../../assemble-file-template');
let html = require('./bio');
let data = require('../../data/bio-data');

let app = assembleFile(html, data, '../../public/bio');

module.exports = app;