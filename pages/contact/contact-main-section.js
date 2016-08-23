let createSectionHeading = require('../../templates/section-heading');

let heading = createSectionHeading('heading', 'heading_classes');

let performForm = require('./perform-form');
let lessonsForm = require('./lessons-form');

let html =
  `
	<main>
		${heading}
		<section class="form-choices">
			<h2>What would you like to contact me about?</h2>
			<button>Lessons</button>	
			<button>Performing at an event</button>		
		</section>
		${lessonsForm}
		${performForm}
	</main>
`;

module.exports = html;
