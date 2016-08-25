let html = 
`
<section id={{lessons.section_id}}>
	<div class="intro">
		<h2>{{lessons.intro.content.h2}}</h2>
		<p>{{{lessons.intro.content.par_1}}}</p>
		<p>{{lessons.intro.content.par_2}}</p>
	</div>
	<form id="{{lessons.form_id}}">
		<fieldset>
			<legend>{{lessons.parent_name.legend}}</legend>
			<input type="text" required="true">
		</fieldset>
		<fieldset>
			<legend>{{lessons.student_name.legend}}</legend>
			<input type="text" required="true">
		</fieldset>
		<fieldset>
			<legend>{{lessons.student_age.legend}}</legend>
			<input type="text" required="true">
		</fieldset>
		<fieldset>
			<legend>{{lessons.student_grade.legend}}</legend>
			<input type="text">
		</fieldset>
		<fieldset>
			<legend>{{lessons.student_experience.legend}}</legend>
			<input type="text">
		</fieldset>
		<fieldset>
			<legend>{{lessons.previous_suzuki_teacher.legend}}</legend>
			<select name="{{lessons.previous_suzuki_teacher.name}}">
				<option value="{{lessons.dropdown_dafault.val}}">{{lessons.dropdown_default.text}}</option>
				<option value="{{lessons.previous_suzuki_teacher.option_1.val}}">{{lessons.previous_suzuki_teacher.option_1.text}}</option>
				<option value="{{lessons.previous_suzuki_teacher.option_2.val}}">{{lessons.previous_suzuki_teacher.option_2.text}}</option>
			</select>
		</fieldset>
		<fieldset>
			<legend>{{lessons.extracurriculars.legend}}</legend>
			<input type="text">
		</fieldset>
		<fieldset>
			<legend>{{lessons.location.legend}}</legend>
			<select name="{{lessons.location.name}}" required="true">
				<option value="{{lessons.dropdown_dafault.val}}">{{lessons.dropdown_default.text}}</option>
				<option value="{{lessons.location.option_1.val}}">{{lessons.location.option_1.text}}</option>
				<option value="{{lessons.location.option_2.val}}">{{lessons.location.option_2.text}}</option>
			</select>
		</fieldset>
		<fieldset>
			<legend>{{lessons.coming_from.legend}}</legend>
			<input type="text">
		</fieldset>
		<fieldset>
			<legend>{{lessons.trial_lesson.legend}}</legend>
			<ul>
				<li>
					<input type="radio" id="{{lessons.trial_lesson.monday.id}}" value="{{lessons.trial_lesson.monday.id}}">
					<label for="{{lessons.trial_lesson.monday.id}}">{{lessons.trial_lesson.monday.label}}</label>
					<select name="{{lessons.trial_lesson.monday.id}}-time">
						<option value="{{lessons.trial_lesson.times.all_day}}">{{lessons.trial_lesson.times.all_day}}</option>
						<option value="{{lessons.trial_lesson.times.am}}">{{lessons.trial_lesson.times.am}}</option>
						<option value="{{lessons.trial_lesson.times.pm}}">{{lessons.trial_lesson.times.pm}}</option>
					</select>
				</li>
				<li>
					<input type="radio" id="{{lessons.trial_lesson.tuesday.id}}" value="{{lessons.trial_lesson.tuesday.id}}">
					<label for="{{lessons.trial_lesson.tuesday.id}}">{{lessons.trial_lesson.tuesday.label}}</label>
					<select name="{{lessons.trial_lesson.tuesday.id}}-time">
						<option value="{{lessons.trial_lesson.times.all_day}}">{{lessons.trial_lesson.times.all_day}}</option>
						<option value="{{lessons.trial_lesson.times.am}}">{{lessons.trial_lesson.times.am}}</option>
						<option value="{{lessons.trial_lesson.times.pm}}">{{lessons.trial_lesson.times.pm}}</option>
					</select>
				</li>
				<li>
					<input type="radio" id="{{lessons.trial_lesson.wednesday.id}}" value="{{lessons.trial_lesson.wednesday.id}}">
					<label for="{{lessons.trial_lesson.wednesday.id}}">{{lessons.trial_lesson.wednesday.label}}</label>
					<select name="{{lessons.trial_lesson.wednesday.id}}-time">
						<option value="{{lessons.trial_lesson.times.all_day}}">{{lessons.trial_lesson.times.all_day}}</option>
						<option value="{{lessons.trial_lesson.times.am}}">{{lessons.trial_lesson.times.am}}</option>
						<option value="{{lessons.trial_lesson.times.pm}}">{{lessons.trial_lesson.times.pm}}</option>
					</select>
				</li>
				<li>
					<input type="radio" id="{{lessons.trial_lesson.thursday.id}}" value="{{lessons.trial_lesson.thursday.id}}">
					<label for="{{lessons.trial_lesson.thursday.id}}">{{lessons.trial_lesson.thursday.label}}</label>
					<select name="{{lessons.trial_lesson.thursday.id}}-time">
						<option value="{{lessons.trial_lesson.times.all_day}}">{{lessons.trial_lesson.times.all_day}}</option>
						<option value="{{lessons.trial_lesson.times.am}}">{{lessons.trial_lesson.times.am}}</option>
						<option value="{{lessons.trial_lesson.times.pm}}">{{lessons.trial_lesson.times.pm}}</option>
					</select>
				</li>
				<li>
					<input type="radio" id="{{lessons.trial_lesson.friday.id}}" value="{{lessons.trial_lesson.friday.id}}">
					<label for="{{lessons.trial_lesson.friday.id}}">{{lessons.trial_lesson.friday.label}}</label>
					<select name="{{lessons.trial_lesson.friday.id}}-time">
						<option value="{{lessons.trial_lesson.times.all_day}}">{{lessons.trial_lesson.times.all_day}}</option>
						<option value="{{lessons.trial_lesson.times.am}}">{{lessons.trial_lesson.times.am}}</option>
						<option value="{{lessons.trial_lesson.times.pm}}">{{lessons.trial_lesson.times.pm}}</option>
					</select>
				</li>
				<li>
					<input type="radio" id="{{lessons.trial_lesson.saturday.id}}" value="{{lessons.trial_lesson.saturday.id}}">
					<label for="{{lessons.trial_lesson.saturday.id}}">{{lessons.trial_lesson.saturday.label}}</label>
					<select name="{{lessons.trial_lesson.saturday.id}}-time">
						<option value="{{lessons.trial_lesson.times.all_day}}">{{lessons.trial_lesson.times.all_day}}</option>
						<option value="{{lessons.trial_lesson.times.am}}">{{lessons.trial_lesson.times.am}}</option>
						<option value="{{lessons.trial_lesson.times.pm}}">{{lessons.trial_lesson.times.pm}}</option>
					</select>
				</li>
				<li>
					<input type="radio" id="{{lessons.trial_lesson.sunday.id}}" value="{{lessons.trial_lesson.sunday.id}}">
					<label for="{{lessons.trial_lesson.sunday.id}}">{{lessons.trial_lesson.sunday.label}}</label>
					<select name="{{lessons.trial_lesson.sunday.id}}-time">
						<option value="{{lessons.trial_lesson.times.all_day}}">{{lessons.trial_lesson.times.all_day}}</option>
						<option value="{{lessons.trial_lesson.times.am}}">{{lessons.trial_lesson.times.am}}</option>
						<option value="{{lessons.trial_lesson.times.pm}}">{{lessons.trial_lesson.times.pm}}</option>
					</select>
				</li>
			</ul>
		</fieldset>
		<fieldset>
			<legend>{{lessons.group_classes.legend}}</legend>
			<select>
				<option value="{{lessons.dropdown_dafault.val}}">{{lessons.dropdown_default.text}}</option>
				<option value="{{lessons.group_classes.option_1.val}}">{{lessons.group_classes.option_1.text}}</option>
				<option value="{{lessons.group_classes.option_2.val}}">{{lessons.group_classes.option_2.text}}</option>
			</select>
		</fieldset>
		<fieldset>
			<legend>{{lessons.extra_questions.legend}}</legend>
			<input type="text">
		</fieldset>
		<fieldset>
			<legend>{{lessons.email.legend}}</legend>
			<input type="email" required="true">
		</fieldset>
		<button type="submit">Submit</button>
	</form>
</section>
`;

module.exports = html;