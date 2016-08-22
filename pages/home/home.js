let header = require('../../templates/header');
let footer = require('../../templates/footer');

let body = header;

let template = require('../../templates/doc')(body);

module.exports = template;