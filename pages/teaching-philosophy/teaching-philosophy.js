let header = require('../../templates/header');
let footer = require('../../templates/footer');
let body = require('./teaching-philosophy-main-section');

let html = require('../../templates/doc')(body);

module.exports = html;