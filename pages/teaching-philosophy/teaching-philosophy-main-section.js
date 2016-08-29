let createSectionHeading = require('../../templates/section-heading');

let heading = createSectionHeading('heading', 'heading_classes');

let html = 
`
	<main>
		${heading}
		<p>{{par_1}}</p>
		<p>{{par_2}}</p>
		<p>{{par_3}}</p>
		<p>{{par_4}}</p>
		<div class="mp3-player">
			<!-- The mp3 Player code will be inserted here -->
			<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/277378000&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
		</div>
		<p>{{{par_5}}}</p>
	</main>
`;

module.exports = html;