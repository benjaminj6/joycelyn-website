let createSectionHeading = require('../../templates/section-heading');

let heading = createSectionHeading('heading', 'heading_classes');

let html =
`
	<main>
		<section class="intro">
			${heading}
			<p>{{intro_par}}</p>
		</section>
		<section class="travel">
			<h2>{{travel.h2}}</h2>
			<p>{{travel.par_1}}</p>
		</section>
		<section class="parents">
			<h2>{{parents.h2}}</h2>
			<div class="practice-partners">
				<h3>{{parent.practice_partners.h3}}</h3>
				<p>{{parent.practice_partners.par_1}}</p>
				<p>{{parent.practice_partners.par_2}}</p>
				<p>{{parent.practice_partners.par_3}}</p>
			</div>
			<div class="being-late">
				<h3>{{parents.being_late.h3}}</h3>
				<p>{{parents.being_late.par_1}}</p>
			</div>
			<div class="makeups">
				<h3>{{parents.makeups.h3}}</h3>
				<p>{{parents.makeups.par_1}}</p>
				<p>{{parents.makeups.par_2}}</p>
				<p>{{parents.makeups.par_3}}</p>
			</div>
			<div class="new-students">
				<h3>{{parents.new_students.h3}}</h3>
				<p>{{parents.new_students.par_1}}</p>
			</div>
			<div class="teacher-error">
				<h3>{{parents.teacher_error.h3}}</h3>
				<p>{{parents.teacher_error.par_1}}</p>
			</div>
			<div class="payment">
				<h3>{{parents.payment.h3}}</h3>
				<p>{{{parents.payment.par_1}}}</p>
				<p>{{{parents.payment.par_2}}}</p>
			</div>
			<div class="instruments">
				<h3>{{parents.instruments.h3}}</h3>
				<p>{{{parents.instruments.par_1}}}</p>
			</div>
		</section>
		<section class="students">
			<h2>{{students.h2}}</h2>
			<div class="fingernails">
				<h3>{{students.fingernails.h3}}</h3>
				<p>{{students.fingernails.par_1}}</p>
			</div>
			<div class="listening">
				<h3>{{students.listening.h3}}</h3>
				<p>{{{students.listening.par_1}}}</p>
			</div>
			<div class="practicing">
				<h3>{{students.practicing.h3}}</h3>
				<p>{{students.practicing.par_1}}</p>
			</div>
		</section>
	</main>
`;

module.exports = html;

