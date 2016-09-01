let data = require('./blog-data.js');
let heading = require('../_templates/section-heading')('heading', 'heading_classes');

let body = `
	<main>
		${data.heading}
		<article>
			<h2>${data.post_1.title}</h2>
			<h3>${data.post_1.date}</h3>
			<p>${data.post_1.content.par_1}</p>
			<p>${data.post_1.content.par_2}</p>
			<p>${data.post_1.content.par_3}</p>
			<hr>
		</article>
		<article>
			<h2>${data.post_2.title}</h2>
			<h3>${data.post_2.date}</h3>
			<p>${data.post_2.content.par_1}</p>
			<hr>
		</article>
		<article>
			<h2>${data.post_3.title}</h2>
			<h3>${data.post_3.date}</h3>
			<p>${data.post_3.content.par_1}</p>
			<p>${data.post_3.content.par_2}</p>
			<hr>
		</article>
		<section class="blog-nav">
			<button>Previous <i class="fa fa-angle-left"></i></button>
			<button>Next <i class="fa fa-angle-right"></i></button>
		</section>
	</main>
`;

module.exports = require('../_templates/doc')(body, data);
