// Require the basic page template w/ header and footer
let html = require('../templates/doc');
let header = require('../templates/header');

// Require the data needed for the home page
let data =  require('../data/home-data');
// Create the body needed for the home page from whatever templates it requires
data.body = header;

// Require banner module??? Or put that directly into the template?

// Export the data as module.data
module.exports.data = data;
// Export the template as module.html OR module.template
module.exports.template = html;