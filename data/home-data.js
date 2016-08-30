let globalData = require('./global-data');
// let header = require('../templates/header');

// Creates the data object to be exported
let data = Object.create(globalData);

data.page_title = 'Joycelyn Choo | Home';

// Change href for 'home' link inside header
data.changeHref('home_href', '.');

module.exports = data;
