let data = require('./teaching-philosophy-data');
let heading = require('../_templates/section-heading');

let body = `
	<main>
		${data.heading}
		<p>${data.par_1}</p>
		<p>${data.par_2}</p>
		<p>${data.par_3}</p>
		<p>${data.par_4}</p>
		<div class="mp3-player">
			<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/277378000&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
		</div>
		<p>${data.par_5}</p>
	</main>
`;

module.exports = require('../_templates/doc')(body, data);
