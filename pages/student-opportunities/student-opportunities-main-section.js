let createSectionHeading = require('../../templates/section-heading');

let heading = createSectionHeading('heading', 'heading_classes');

let html = 
`
	<main>
		<section class="intro">
			${heading}
			<p>{{intro_par}}</p>
		</section>
		<section class="weekly-lessons">
			<h2>{{weekly_lessons.h2}}</h2>
			<img src="{{weekly_lessons.img.src}}" alt="{{weekly_lessons.img.alt}}">
			<p>{{weekly_lessons.par_1}}</p>
		</section>
		<section class="group-classes">
			<h2>{{group_classes.h2}}</h2>
			<img src="{{group_classes.img.src}}" alt="{{group_classes.img.alt}}">
			<p>{{group_classes.par_1}}</p>
		</section>
		<section class="recitals">
			<h2>{{recitals.h2}}</h2>
			<img src="{{recitals.img.src}}" alt="{{recitals.img.alt}}">
			<p>{{recitals.par_1}}</p>
		</section>
	</main>
`;

module.exports = html;