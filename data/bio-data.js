let globalData = require('./global-data');

let data = Object.create(globalData);

data.page_title = 'Joycelyn Choo | Bio';

data.changeHref('bio_href', '.');

module.exports = data;