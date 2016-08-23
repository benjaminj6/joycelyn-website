let globalData = require('./global-data');
// let header = require('../templates/header');

// Creates the data object to be exported
let data = Object.create(globalData);

data.page_title = 'Joycelyn Choo | Home';
data.image_1_path = 'http://placehold.it/300x200',
data.image_2_path = 'PATH TO IMAGE',
data.image_3_path = 'PATH TO IMAGE',


// Change href for 'home' link inside header
data.changeHref('home_href', '.');

module.exports = data;
