let header = require('../../templates/header');
let footer = require('../../templates/footer');
let body = require('./why-private-lessons-main-section');

let html = require('../../templates/doc')(body);

module.exports = html;