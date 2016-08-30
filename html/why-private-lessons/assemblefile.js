let assembleFile = require('../../assemble-file-template');
let html = require('./why-private-lessons');
let data = require('./why-private-lessons-data');

let app = assembleFile(html, data, '../../public/why-private-lessons'); 

module.exports = app;	