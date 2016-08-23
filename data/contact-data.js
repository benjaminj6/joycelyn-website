let globalData = require('./global-data');

let data = Object.create(globalData);

data.page_title = 'Joycelyn Choo | Contact';

data.heading = 'CONTACT';

data.changeHref('contact_href', '.');

module.exports = data;