let createSectionHeading = require('../../templates/section-heading');

let heading = createSectionHeading('heading', 'heading_classes');

let html = 
`
	<main>
		${heading}
		<p>{{par_1.text_before_link}}<a href="{{par_1.suzuki_href}}" target="blank">{{par_1.text_in_link}}</a>{{par_1.text_after_link}}</p>
		<ul>
			<li>
				<h3>{{list_1.h3}}</h3>
				<p>{{list_1.par_1}}</p>
			</li>
			<li>
				<h3>{{list_2.h3}}</h3>
				<p>{{list_2.par_1}}</p>
			</li>
			<li>
				<h3>{{list_3.h3}}</h3>
				<p>{{list_3.par_1}}</p>
			</li>
			<li>
				<h3>{{list_4.h3}}</h3>
				<p>{{list_4.par_1}}</p>
			</li>
		</ul>
	</main>
`;
module.exports = html;

