let data = require('./bio-data');
let heading = require('../_templates/section-heading')('heading', 'heading_classes');

let body = `
	<main>
		${heading}
		<img src="${data.img.src}" alt=${data.img.alt}>
		<p>${data.par_1}</p>
		<p>${data.par_2}</p>
		<p>${data.par_3}</p>
		<p>${data.par_4}</p>
	</main>
`;


module.exports = require('../_templates/doc')(body, data);