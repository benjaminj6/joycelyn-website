let data = require('./suzuki-method-data');
let heading = require('../_templates/section-heading');

let body = `
	<main>
		${data.heading}
		<p>${data.par_1}</p>
		<ul>
			<li>
				<h4>${data.list_1.h4}</h4>
				<p>${data.list_1.par_1}</p>
			</li>
			<li>
				<h4>${data.list_2.h4}</h4>
				<p>${data.list_2.par_1}</p>
			</li>
			<li>
				<h4>${data.list_3.h4}</h4>
				<p>${data.list_3.par_1}</p>
			</li>
			<li>
				<h4>${data.list_4.h4}</h4>
				<p>${data.list_4.par_1}</p>
			</li>
		</ul>
	</main>
`;

module.exports = require('../_templates/doc')(body, data);
