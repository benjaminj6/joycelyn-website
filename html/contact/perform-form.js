module.exports = function(data) {
	return `
		<section id=${data.perform.section_id}>
			<div class="intro">
				<h2>${data.perform.intro.h2}</h2>
				<p>${data.perform.intro.par_1}</p>
			</div>
			<form id="${data.perform.form_id}">
				<fieldset>
					<legend>${data.perform.name.legend}</legend>
					<input type="text" required="true">
				</fieldset>
				<fieldset>
					<legend>${data.perform.phone.legend}</legend>
					<input type="text" required="true">
				</fieldset>
				<fieldset>
					<legend>${data.perform.email.legend}</legend>
					<input type="text" required="true">
				</fieldset>
				<fieldset>
					<legend>${data.perform.event_type.legend}</legend>
					<input type="text">
				</fieldset>
				<fieldset>
					<legend>${data.perform.person_role.legend}</legend>
					<input type="text">
				</fieldset>
				<fieldset>
					<legend>${data.perform.date.legend}</legend>
					<input type="date" required="true">
				</fieldset>
				<fieldset>
					<legend>${data.perform.budget.legend}</legend>
					<input type="text" required="true">
				</fieldset>
				<fieldset>
					<legend>${data.perform.musicians.legend}</legend>
					<input type="text" required="true">
				</fieldset>
				<fieldset>
					<legend>${data.perform.special_requests.legend}</legend>
					<input type="text">
				</fieldset>
				<fieldset>
					<legend>${data.perform.extra_questions.legend}</legend>
					<input type="text">
				</fieldset>
				<button type="submit">Submit</button>
			</form>
		</section>	
	`;
};