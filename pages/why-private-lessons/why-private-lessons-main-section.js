let createSectionHeading = require('../../templates/section-heading');

let heading = createSectionHeading('heading', 'heading_classes');

let html = 
`
	<main>
		${heading}
		<p>{{par_1}}</p>
	</main>
`;

module.exports = html;