let createSectionHeading = require('../../templates/section-heading');

let heading = createSectionHeading('heading', 'heading_classes');

let html = 
`
	<main>
		${heading}
		<img src="{{img.src}}" alt="{{img.alt}}" />
		<p>{{par_1}}</p>
		<p>{{par_2}}</p>
		<p>{{{par_3}}}</p>
	</main>
`;

module.exports = html;