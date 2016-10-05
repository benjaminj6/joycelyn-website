let data = require('./contact-data');
let heading = require('../_templates/section-heading')(data);

let performForm = require('./perform-form')(data);
let lessonsForm = require('./lessons-form')(data);

let body = `
	<main>
		<section class="form-choices">
			<h2>What would you like to contact me about?</h2>
			<button class="lessons">Lessons</button>	
			<button class="performing">Performing at an event</button>	
		</section>
		${lessonsForm}
		${performForm}
	</main>
`;

module.exports = require('../_templates/doc')(body, data);
