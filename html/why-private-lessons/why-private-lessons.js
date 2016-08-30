let header = require('../_templates/header');
let footer = require('../_templates/footer');
let body = require('./why-private-lessons-main-section');

let html = require('../_templates/doc')(body);

module.exports = html;