let data = require('./student-opportunities-data');
let heading = require('../_templates/section-heading')(data);

let body = `
	<main>
		<section class="intro">
			${heading}
			<p>${data.intro_par}</p>
		</section>
		<section class="weekly-lessons">
			<h2>${data.weekly_lessons.h2}</h2>
			<img src="${data.weekly_lessons.img.src}" alt="${data.weekly_lessons.img.alt}">
			<p>${data.weekly_lessons.par_1}</p>
		</section>
		<section class="group-classes">
			<h2>${data.group_classes.h2}</h2>
			<img src="${data.group_classes.img.src}" alt="${data.group_classes.img.alt}">
			<p>${data.group_classes.par_1}</p>
		</section>
		<section class="recitals">
			<h2>${data.recitals.h2}</h2>
			<img src="${data.recitals.img.src}" alt="${data.recitals.img.alt}">
			<p>${data.recitals.par_1}</p>
		</section>
		<section class="parents">
			<h2>${data.parents.h2}</h2>
			<img src="${data.parents.img.src}" alt="${data.parents.img.alt}">
			<p>${data.parents.par_1}</p>	
			<p>${data.parents.par_2}</p>
			<p>${data.parents.par_3}</p>
		</section>
	</main>
`;

module.exports = require('../_templates/doc')(body, data);
