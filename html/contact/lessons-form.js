module.exports = function(data) {

	return `
		<section id=${data.lessons.section_id}>
			<div class="intro">
				<h2>${data.lessons.intro.h2}</h2>
				<p>${data.lessons.intro.par_1}</p>
				<p>${data.lessons.intro.par_2}</p>
			</div>
			<form id="${data.lessons.form_id}">
				<fieldset>
					<legend>${data.lessons.parent_name.legend}</legend>
					<input type="text" required="true">
				</fieldset>
				<fieldset>
					<legend>${data.lessons.student_name.legend}</legend>
					<input type="text" required="true">
				</fieldset>
				<fieldset>
					<legend>${data.lessons.student_age.legend}</legend>
					<input type="text" required="true">
				</fieldset>
				<fieldset>
					<legend>${data.lessons.student_grade.legend}</legend>
					<input type="text">
				</fieldset>
				<fieldset>
					<legend>${data.lessons.student_experience.legend}</legend>
					<input type="text">
				</fieldset>
				<fieldset>
					<legend>${data.lessons.previous_suzuki_teacher.legend}</legend>
					<select name="${data.lessons.previous_suzuki_teacher.name}">
						<option value="${data.lessons.dropdown_default.val}">${data.lessons.dropdown_default.text}</option>
						<option value="${data.lessons.previous_suzuki_teacher.option_1.val}">${data.lessons.previous_suzuki_teacher.option_1.text}</option>
						<option value="${data.lessons.previous_suzuki_teacher.option_2.val}">${data.lessons.previous_suzuki_teacher.option_2.text}</option>
					</select>
				</fieldset>
				<fieldset>
					<legend>${data.lessons.extracurriculars.legend}</legend>
					<input type="text">
				</fieldset>
				<fieldset>
					<legend>${data.lessons.location.legend}</legend>
					<select name="${data.lessons.location.name}" required="true">
						<option value="${data.lessons.dropdown_default.val}">${data.lessons.dropdown_default.text}</option>
						<option value="${data.lessons.location.option_1.val}">${data.lessons.location.option_1.text}</option>
						<option value="${data.lessons.location.option_2.val}">${data.lessons.location.option_2.text}</option>
					</select>
				</fieldset>
				<fieldset>
					<legend>${data.lessons.coming_from.legend}</legend>
					<input type="text">
				</fieldset>
				<fieldset>
					<legend>${data.lessons.trial_lesson.legend}</legend>
					<ul>
						<li>
							<input type="radio" id="${data.lessons.trial_lesson.monday.id}" value="${data.lessons.trial_lesson.monday.id}">
							<label for="${data.lessons.trial_lesson.monday.id}">${data.lessons.trial_lesson.monday.label}</label>
							<select name="${data.lessons.trial_lesson.monday.id}-time">
								<option value="${data.lessons.trial_lesson.times.all_day}">${data.lessons.trial_lesson.times.all_day}</option>
								<option value="${data.lessons.trial_lesson.times.am}">${data.lessons.trial_lesson.times.am}</option>
								<option value="${data.lessons.trial_lesson.times.pm}">${data.lessons.trial_lesson.times.pm}</option>
							</select>
						</li>
						<li>
							<input type="radio" id="${data.lessons.trial_lesson.tuesday.id}" value="${data.lessons.trial_lesson.tuesday.id}">
							<label for="${data.lessons.trial_lesson.tuesday.id}">${data.lessons.trial_lesson.tuesday.label}</label>
							<select name="${data.lessons.trial_lesson.tuesday.id}-time">
								<option value="${data.lessons.trial_lesson.times.all_day}">${data.lessons.trial_lesson.times.all_day}</option>
								<option value="${data.lessons.trial_lesson.times.am}">${data.lessons.trial_lesson.times.am}</option>
								<option value="${data.lessons.trial_lesson.times.pm}">${data.lessons.trial_lesson.times.pm}</option>
							</select>
						</li>
						<li>
							<input type="radio" id="${data.lessons.trial_lesson.wednesday.id}" value="${data.lessons.trial_lesson.wednesday.id}">
							<label for="${data.lessons.trial_lesson.wednesday.id}">${data.lessons.trial_lesson.wednesday.label}</label>
							<select name="${data.lessons.trial_lesson.wednesday.id}-time">
								<option value="${data.lessons.trial_lesson.times.all_day}">${data.lessons.trial_lesson.times.all_day}</option>
								<option value="${data.lessons.trial_lesson.times.am}">${data.lessons.trial_lesson.times.am}</option>
								<option value="${data.lessons.trial_lesson.times.pm}">${data.lessons.trial_lesson.times.pm}</option>
							</select>
						</li>
						<li>
							<input type="radio" id="${data.lessons.trial_lesson.thursday.id}" value="${data.lessons.trial_lesson.thursday.id}">
							<label for="${data.lessons.trial_lesson.thursday.id}">${data.lessons.trial_lesson.thursday.label}</label>
							<select name="${data.lessons.trial_lesson.thursday.id}-time">
								<option value="${data.lessons.trial_lesson.times.all_day}">${data.lessons.trial_lesson.times.all_day}</option>
								<option value="${data.lessons.trial_lesson.times.am}">${data.lessons.trial_lesson.times.am}</option>
								<option value="${data.lessons.trial_lesson.times.pm}">${data.lessons.trial_lesson.times.pm}</option>
							</select>
						</li>
						<li>
							<input type="radio" id="${data.lessons.trial_lesson.friday.id}" value="${data.lessons.trial_lesson.friday.id}">
							<label for="${data.lessons.trial_lesson.friday.id}">${data.lessons.trial_lesson.friday.label}</label>
							<select name="${data.lessons.trial_lesson.friday.id}-time">
								<option value="${data.lessons.trial_lesson.times.all_day}">${data.lessons.trial_lesson.times.all_day}</option>
								<option value="${data.lessons.trial_lesson.times.am}">${data.lessons.trial_lesson.times.am}</option>
								<option value="${data.lessons.trial_lesson.times.pm}">${data.lessons.trial_lesson.times.pm}</option>
							</select>
						</li>
						<li>
							<input type="radio" id="${data.lessons.trial_lesson.saturday.id}" value="${data.lessons.trial_lesson.saturday.id}">
							<label for="${data.lessons.trial_lesson.saturday.id}">${data.lessons.trial_lesson.saturday.label}</label>
							<select name="${data.lessons.trial_lesson.saturday.id}-time">
								<option value="${data.lessons.trial_lesson.times.all_day}">${data.lessons.trial_lesson.times.all_day}</option>
								<option value="${data.lessons.trial_lesson.times.am}">${data.lessons.trial_lesson.times.am}</option>
								<option value="${data.lessons.trial_lesson.times.pm}">${data.lessons.trial_lesson.times.pm}</option>
							</select>
						</li>
						<li>
							<input type="radio" id="${data.lessons.trial_lesson.sunday.id}" value="${data.lessons.trial_lesson.sunday.id}">
							<label for="${data.lessons.trial_lesson.sunday.id}">${data.lessons.trial_lesson.sunday.label}</label>
							<select name="${data.lessons.trial_lesson.sunday.id}-time">
								<option value="${data.lessons.trial_lesson.times.all_day}">${data.lessons.trial_lesson.times.all_day}</option>
								<option value="${data.lessons.trial_lesson.times.am}">${data.lessons.trial_lesson.times.am}</option>
								<option value="${data.lessons.trial_lesson.times.pm}">${data.lessons.trial_lesson.times.pm}</option>
							</select>
						</li>
					</ul>
				</fieldset>
				<fieldset>
					<legend>${data.lessons.group_classes.legend}</legend>
					<select>
						<option value="${data.lessons.dropdown_default.val}">${data.lessons.dropdown_default.text}</option>
						<option value="${data.lessons.group_classes.option_1.val}">${data.lessons.group_classes.option_1.text}</option>
						<option value="${data.lessons.group_classes.option_2.val}">${data.lessons.group_classes.option_2.text}</option>
					</select>
				</fieldset>
				<fieldset>
					<legend>${data.lessons.extra_questions.legend}</legend>
					<input type="text">
				</fieldset>
				<fieldset>
					<legend>${data.lessons.email.legend}</legend>
					<input type="email" required="true">
				</fieldset>
				<button type="submit">Submit</button>
			</form>
		</section>
	`;
};