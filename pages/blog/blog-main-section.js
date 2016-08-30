let createSectionHeading = require('../../templates/section-heading');

let heading = createSectionHeading('heading', 'heading_classes');

let html =
`
	<main>
		${heading}
		<article>
			<h2>{{post_1.title}}</h2>
			<h3>{{post_1.date}}</h3>
			<p>{{post_1.content.par_1}}</p>
			<p>{{post_1.content.par_2}}</p>
			<p>{{post_1.content.par_3}}</p>
			<hr>
		</article>
		<article>
			<h2>{{post_2.title}}</h2>
			<h3>{{post_2.date}}</h3>
			<p>{{post_2.content.par_1}}</p>
			<hr>
		</article>
		<article>
			<h2>{{post_3.title}}</h2>
			<h3>{{post_3.date}}</h3>
			<p>{{post_3.content.par_1}}</p>
			<p>{{post_3.content.par_2}}</p>
			<hr>
		</article>
		<section class="blog-nav">
			<button>Previous <i class="fa fa-angle-left"></i></button>
			<button>Next <i class="fa fa-angle-right"></i></button>
		</section>
	</main>
`;

module.exports = html;
