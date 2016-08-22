var assembleFile = require('../../assemble');
let template = require('./home');
let data = require('../../data/home-data');

var app = assembleFile(template, data, '../../public/home'); 

module.exports = app;	