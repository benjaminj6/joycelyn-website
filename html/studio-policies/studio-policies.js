let data = require('./studio-policies-data');
let heading = require('../_templates/section-heading')(data);

let body = `
	<main>
		<section class="intro">
			${heading}
			<p>${data.intro_par}</p>
		</section>
		<section class="travel">
			<h2>${data.travel.h2}</h2>
			<p>${data.travel.par_1}</p>
		</section>
		<section class="parents">
			<h2>${data.parents.h2}</h2>
			<div class="practice-partners">
				<h3>${data.parents.practice_partners.h3}</h3>
				<p>${data.parents.practice_partners.par_1}</p>
				<p>${data.parents.practice_partners.par_2}</p>
				<p>${data.parents.practice_partners.par_3}</p>
			</div>
			<div class="being-late">
				<h3>${data.parents.being_late.h3}</h3>
				<p>${data.parents.being_late.par_1}</p>
			</div>
			<div class="teacher-error">
				<h3>${data.parents.teacher_error.h3}</h3>
				<p>${data.parents.teacher_error.par_1}</p>
			</div>
			<div class="makeups">
				<h3>${data.parents.makeups.h3}</h3>
				<p>${data.parents.makeups.par_1}</p>
				<p>${data.parents.makeups.par_2}</p>
				<p>${data.parents.makeups.par_3}</p>
			</div>
			<div class="new-students">
				<h3>${data.parents.new_students.h3}</h3>
				<p>${data.parents.new_students.par_1}</p>
			</div>
			<div class="payment">
				<h3>${data.parents.payment.h3}</h3>
				<p>${data.parents.payment.par_1}</p>
				<p>${data.parents.payment.par_2}</p>
			</div>
			<div class="instruments">
				<h3>${data.parents.instruments.h3}</h3>
				<p>${data.parents.instruments.par_1}</p>
			</div>
		</section>
		<section class="students">
			<h2>${data.students.h2}</h2>
			<div class="fingernails">
				<h3>${data.students.fingernails.h3}</h3>
				<p>${data.students.fingernails.par_1}</p>
			</div>
			<div class="listening">
				<h3>${data.students.listening.h3}</h3>
				<p>${data.students.listening.par_1}</p>
			</div>
			<div class="practicing">
				<h3>${data.students.practicing.h3}</h3>
				<p>${data.students.practicing.par_1}</p>
			</div>
		</section>
	</main>
`;

module.exports = require('../_templates/doc')(body, data);
