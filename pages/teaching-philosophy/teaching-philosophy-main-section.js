let createSectionHeading = require('../../templates/section-heading');

let heading = createSectionHeading('heading', 'heading_classes');

let html = 
`
	<main>
		${heading}
		<p>{{par_1}}</p>
		<p>{{par_2}}</p>
		<div class="mp3-player">
			<!-- The mp3 Player code will be inserted here -->
			<p>MP3 PLAYER WITH SOUNDCLOUD LINK</p>
		</div>
	</main>
`;

module.exports = html;