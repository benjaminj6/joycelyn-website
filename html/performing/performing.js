let data = require('./performing-data');
let heading = require('../_templates/section-heading');

let body = `
	<main>
		${data.heading}
		<img src="${data.img.src}}" alt="${data.img.alt}}">
		<section class="intro">
			<p>${data.intro.par_1}}</p>
			<p>${data.intro.par_2.text_part_1}}<a href="${data.intro.par_2.bio_href}}" target="_blank">${data.intro.par_2.text_in_link}}</a></p>
		</section>
		<section class="video-1">
			<h3>${data.video_1.h3}}</h3>
			<iframe type="text/html" width="400" height="400" src="${data.video_1.src}}" frameborder="0" allowfullscreen></iframe>
		</section>
		<section class="video-2">
			<h3>${data.video_2.h3}}</h3>
			<iframe type="text/html" width="400" height="400" src="${data.video_2.src}}" frameborder="0" allowfullscreen></iframe>
		</section>
		<section class="video-3">
			<h3>${data.video_3.h3}}</h3>
			<iframe type="text/html" width="400" height="400" src="${data.video_3.src}}" frameborder="0" allowfullscreen></iframe>
		</section>
	</main>
`;

module.exports = require('../_templates/doc')(body, data);
