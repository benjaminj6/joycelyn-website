let header = require('../../templates/header');
let footer = require('../../templates/footer');
let body = require('./bio-main-section');

let html = require('../../templates/doc')(body);

module.exports = html;