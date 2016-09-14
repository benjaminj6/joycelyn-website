let globalData = require('../global-data');
let data = Object.create(globalData);

data.page_title = 'Joycelyn Choo | Home';

data.changeHref('home_href', '.');
data.changeHref('title_img_href', '../assets/images/logo.png');


module.exports = data;
