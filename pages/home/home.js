// let header = require('../../templates/header');
// let footer = require('../../templates/footer');
let body = require('./home-main-section');

// let body = header + main + footer;

let html = require('../../templates/doc')(body);

module.exports = html;