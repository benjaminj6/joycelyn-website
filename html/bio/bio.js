let data = require('./bio-data');
let heading = require('../_templates/section-heading')(data);

let body = `
	<main>
		<img src="${data.img.src}" alt=${data.img.alt}>
		<section>
			${heading}
			<div class="text">
				<p>${data.par_1}</p>
				<p>${data.par_2}</p>
				<p>${data.par_3}</p>
				<p>${data.par_4}</p>
				<p>${data.par_5}</p>
			</div>
		</section>
	</main>
`;

module.exports = require('../_templates/doc')(body, data);