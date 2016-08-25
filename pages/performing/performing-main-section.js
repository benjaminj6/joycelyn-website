let createSectionHeading = require('../../templates/section-heading');

let heading = createSectionHeading('heading', 'heading_classes');

let html = 
`
	<main>
		${heading}
		<img src="{{img.src}}" alt="{{img.alt}}">
		<section class="intro">
			<p>{{intro.par_1}}</p>
			<p>{{intro.par_2.text_part_1}}<a href="{{intro.par_2.bio_href}}" target="blank">{{intro.par_2.text_in_link}}</a></p>
		</section>
		<section class="video-1">
			<h3>{{video_1.h3}}</h3>
			<iframe type="text/html" width="400" height="400" src="{{video_1.src}}" frameborder="0"></iframe>
		</section>
		<section class="video-2">
			<h3>{{video_2.h3}}</h3>
			<iframe type="text/html" width="400" height="400" src="{{video_2.src}}" frameborder="0"></iframe>
		</section>
		<section class="video-3">
			<h3>{{video_3.h3}}</h3>
			<iframe type="text/html" width="400" height="400" src="{{video_3.src}}" frameborder="0"></iframe>
		</section>
	</main>
`;

module.exports = html;

