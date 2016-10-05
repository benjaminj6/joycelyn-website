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
					<p>${data.lessons.parent_name.p}</p>
					<input type="text" required="true">
				</fieldset>
				<fieldset>
					<p>${data.lessons.student_name.p}</p>
					<input type="text" required="true">
				</fieldset>
				<fieldset>
					<p>${data.lessons.student_age.p}</p>
					<input type="number" required="true">
				</fieldset>
				<fieldset>
					<p>${data.lessons.student_grade.p}</p>
					<input type="number">
				</fieldset>
				<fieldset>
					<p>${data.lessons.student_experience.p}</p>
					<textarea id="student-exprience" cols="30" rows="10"></textarea>
				</fieldset>
				<fieldset>
					<p>${data.lessons.previous_suzuki_teacher.p}</p>
					<ul class="radio-buttons switch">
						<li>
							<input type="radio" value="${data.lessons.previous_suzuki_teacher.option_1.val}" id="suzuki-option1">
							<label for="suzuki-option1" class="left-label">${data.lessons.previous_suzuki_teacher.option_1.text}</label>
						</li>
						<li>
							<input type="radio" value="${data.lessons.previous_suzuki_teacher.option_2.val}" id="suzuki-option2">
							<label for="suzuki-option2" class="right-label">${data.lessons.previous_suzuki_teacher.option_2.text}</label>
						</li>
					</ul>
				</fieldset>
				<fieldset>
					<p>${data.lessons.extracurriculars.p}</p>
					<textarea name="student-extracurriculars" id="" cols="30" rows="10"></textarea>
				</fieldset>
				<fieldset>
					<p>${data.lessons.location.p}</p>

					<ul class="radio-buttons switch">
						<li>
							<input type="radio" value="${data.lessons.location.option_1.val}" id="location-option1">
							<label for="location-option1" class="left-label">${data.lessons.location.option_1.text}</label>
						</li>
						<li>
							<input type="radio" value="${data.lessons.location.option_2.val}" id="location-option2">
							<label for="location-option2" class="right-label">${data.lessons.location.option_2.text}</label>							
						</li>
					</ul>
				</fieldset>
				<fieldset>
					<p>${data.lessons.coming_from.p}</p>
					<input type="text">
				</fieldset>
				<fieldset>
					<p>${data.lessons.trial_lesson.p}</p>
					<ul class="radio-buttons days-list">
						<li class="day">
							<input type="radio" id="${data.lessons.trial_lesson.monday.id}" value="${data.lessons.trial_lesson.monday.id}">
							<label class="day-label" for="${data.lessons.trial_lesson.monday.id}">${data.lessons.trial_lesson.monday.label}</label>
							
							<ul class="radio-buttons time">
								<li>
									<input type="radio" id="monday-all-day" value="${data.lessons.trial_lesson.times.all_day}">
									<label for="monday-all-day" class="left-label">${data.lessons.trial_lesson.times.all_day}</label>
								</li>
								<li>
									<input type="radio" id="monday-am" value="${data.lessons.trial_lesson.times.am}">
									<label for="monday-am">${data.lessons.trial_lesson.times.am}</label>
								</li>
								<li>
									<input type="radio" id="monday-pm" value="${data.lessons.trial_lesson.times.pm}">
									<label for="monday-pm" class="right-label">${data.lessons.trial_lesson.times.pm}</label>
								</li>
							</ul>
						</li>
						<li class="day">
							<input type="radio" id="${data.lessons.trial_lesson.tuesday.id}" value="${data.lessons.trial_lesson.tuesday.id}">
							<label class="day-label" for="${data.lessons.trial_lesson.tuesday.id}">${data.lessons.trial_lesson.tuesday.label}</label>

							<ul class="radio-buttons time">
								<li>
									<input type="radio" id="tuesday-all-day" value="${data.lessons.trial_lesson.times.all_day}">
									<label for="tuesday-all-day" class="left-label">${data.lessons.trial_lesson.times.all_day}</label>
								</li>
								<li>
									<input type="radio" id="tuesday-am" value="${data.lessons.trial_lesson.times.am}">
									<label for="tuesday-am">${data.lessons.trial_lesson.times.am}</label>
								</li>
								<li>
									<input type="radio" id="tuesday-pm" value="${data.lessons.trial_lesson.times.pm}">
									<label for="tuesday-pm" class="right-label">${data.lessons.trial_lesson.times.pm}</label>
								</li>
							</ul>
						</li>
						<li class="day">
							<input type="radio" id="${data.lessons.trial_lesson.wednesday.id}" value="${data.lessons.trial_lesson.wednesday.id}">
							<label class="day-label" for="${data.lessons.trial_lesson.wednesday.id}">${data.lessons.trial_lesson.wednesday.label}</label>
							
							<ul class="radio-buttons time">
								<li>
									<input type="radio" id="wednesday-all-day" value="${data.lessons.trial_lesson.times.all_day}">
									<label for="wednesday-all-day" class="left-label">${data.lessons.trial_lesson.times.all_day}</label>
								</li>
								<li>
									<input type="radio" id="wednesday-am" value="${data.lessons.trial_lesson.times.am}">
									<label for="wednesday-am">${data.lessons.trial_lesson.times.am}</label>
								</li>
								<li>
									<input type="radio" id="wednesday-pm" value="${data.lessons.trial_lesson.times.pm}">
									<label for="wednesday-pm" class="right-label">${data.lessons.trial_lesson.times.pm}</label>
								</li>
							</ul>
						</li>
						<li class="day">
							<input type="radio" id="${data.lessons.trial_lesson.thursday.id}" value="${data.lessons.trial_lesson.thursday.id}">
							<label class="day-label" for="${data.lessons.trial_lesson.thursday.id}">${data.lessons.trial_lesson.thursday.label}</label>
							
							<ul class="radio-buttons time">
								<li>
									<input type="radio" id="thursday-all-day" value="${data.lessons.trial_lesson.times.all_day}">
									<label for="thursday-all-day" class="left-label">${data.lessons.trial_lesson.times.all_day}</label>
								</li>
								<li>
									<input type="radio" id="thursday-am" value="${data.lessons.trial_lesson.times.am}">
									<label for="thursday-am">${data.lessons.trial_lesson.times.am}</label>
								</li>
								<li>
									<input type="radio" id="thursday-pm" value="${data.lessons.trial_lesson.times.pm}">
									<label for="thursday-pm" class="right-label">${data.lessons.trial_lesson.times.pm}</label>
								</li>
							</ul>
						</li>
						<li class="day">
							<input type="radio" id="${data.lessons.trial_lesson.friday.id}" value="${data.lessons.trial_lesson.friday.id}">
							<label class="day-label" for="${data.lessons.trial_lesson.friday.id}">${data.lessons.trial_lesson.friday.label}</label>
							
							<ul class="radio-buttons time">
								<li>
									<input type="radio" id="friday-all-day" value="${data.lessons.trial_lesson.times.all_day}">
									<label for="friday-all-day" class="left-label">${data.lessons.trial_lesson.times.all_day}</label>
								</li>
								<li>
									<input type="radio" id="friday-am" value="${data.lessons.trial_lesson.times.am}">
									<label for="friday-am">${data.lessons.trial_lesson.times.am}</label>
								</li>
								<li>
									<input type="radio" id="friday-pm" value="${data.lessons.trial_lesson.times.pm}">
									<label for="friday-pm" class="right-label">${data.lessons.trial_lesson.times.pm}</label>
								</li>
							</ul>
						</li>
						<li class="day">
							<input type="radio" id="${data.lessons.trial_lesson.saturday.id}" value="${data.lessons.trial_lesson.saturday.id}">
							<label class="day-label" for="${data.lessons.trial_lesson.saturday.id}">${data.lessons.trial_lesson.saturday.label}</label>
							
							<ul class="radio-buttons time">
								<li>
									<input type="radio" id="saturday-all-day" value="${data.lessons.trial_lesson.times.all_day}">
									<label for="saturday-all-day" class="left-label">${data.lessons.trial_lesson.times.all_day}</label>
								</li>
								<li>
									<input type="radio" id="saturday-am" value="${data.lessons.trial_lesson.times.am}">
									<label for="saturday-am">${data.lessons.trial_lesson.times.am}</label>
								</li>
								<li>
									<input type="radio" id="saturday-pm" value="${data.lessons.trial_lesson.times.pm}">
									<label for="saturday-pm" class="right-label">${data.lessons.trial_lesson.times.pm}</label>
								</li>
							</ul>
						</li>
						<li class="day">
							<input type="radio" id="${data.lessons.trial_lesson.sunday.id}" value="${data.lessons.trial_lesson.sunday.id}">
							<label class="day-label" for="${data.lessons.trial_lesson.sunday.id}">${data.lessons.trial_lesson.sunday.label}</label>
							
							<ul class="radio-buttons time">
								<li>
									<input type="radio" id="sunday-all-day" value="${data.lessons.trial_lesson.times.all_day}">
									<label for="sunday-all-day" class="left-label">${data.lessons.trial_lesson.times.all_day}</label>
								</li>
								<li>
									<input type="radio" id="sunday-am" value="${data.lessons.trial_lesson.times.am}">
									<label for="sunday-am">${data.lessons.trial_lesson.times.am}</label>
								</li>
								<li>
									<input type="radio" id="sunday-pm" value="${data.lessons.trial_lesson.times.pm}">
									<label for="sunday-pm" class="right-label">${data.lessons.trial_lesson.times.pm}</label>
								</li>
							</ul>
						</li>
					</ul>
				</fieldset>
				<fieldset>
					<p>${data.lessons.group_classes.p}</p>

					<ul class="radio-buttons switch">
						<li>
							<input type="radio" id="group-classes-option1" value="${data.lessons.group_classes.option_1.val}">
							<label for="group-classes-option2" class="left-label">${data.lessons.group_classes.option_1.text}</label>
						</li>
						<li>
							<input type="radio" id="group-classes-option2" value="${data.lessons.group_classes.option_2.val}">
							<label for="group-classes-option2" class="right-label">${data.lessons.group_classes.option_2.text}</label>
						</li>
					</ul>
				</fieldset>
				<fieldset>
					<p>${data.lessons.extra_questions.p}</p>
					<textarea id="lessons-extra-questions" cols="30" rows="10"></textarea>
				</fieldset>
				<fieldset>
					<p>${data.lessons.email.p}</p>
					<input type="email" required="true">
				</fieldset>
				<button type="submit">Submit</button>
			</form>
		</section>
	`;
};
