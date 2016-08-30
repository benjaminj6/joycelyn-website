let createSectionHeading = require('../_templates/section-heading');

let heading = createSectionHeading('heading', 'heading_classes');

module.exports = `
	<main>
		${heading}
		<img src="{{img.src}}" alt={{img.alt}}>
		<p>{{par_1}}</p>
		<p>{{par_2}}</p>
		<p>{{par_3}}</p>
		<p>{{{par_4}}}</p>
	</main>
`;