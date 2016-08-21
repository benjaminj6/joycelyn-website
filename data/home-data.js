let globalData = require('./global-data');
let header = require('../templates/header');

// Creates the data object to be exported
let data = Object.create(globalData);

data.page_title = 'Joycelyn Choo | Home';
data.css = 'PATH TO CSS';
data.js = 'PATH TO JS';
data.body = header;

// Change href inside header
data.changeHref('home_href', '.');

module.exports = data;
