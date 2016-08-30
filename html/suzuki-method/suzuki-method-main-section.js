let createSectionHeading = require('../_templates/section-heading');

let heading = createSectionHeading('heading', 'heading_classes');

module.exports = 
`
	<main>
		${heading}
		<p>{{{par_1}}}</p>
		<ul>
			<li>
				<h4>{{list_1.h4}}</h4>
				<p>{{list_1.par_1}}</p>
			</li>
			<li>
				<h4>{{list_2.h4}}</h4>
				<p>{{list_2.par_1}}</p>
			</li>
			<li>
				<h4>{{list_3.h4}}</h4>
				<p>{{list_3.par_1}}</p>
			</li>
			<li>
				<h4>{{list_4.h4}}</h4>
				<p>{{list_4.par_1}}</p>
			</li>
		</ul>
	</main>
`;