module.exports = function(data) {
	return `
		<section id=${data.perform.section_id}>
			<div class="intro">
				<h2>${data.perform.intro.h2}</h2>
				<p>${data.perform.intro.par_1}</p>
			</div>
			<form id="${data.perform.form_id}">
				<fieldset>
					<p>${data.perform.name.p}</p>
					<input type="text" required="true">
				</fieldset>
				<fieldset>
					<p>${data.perform.phone.p}</p>
					<input type="text" required="true">
				</fieldset>
				<fieldset>
					<p>${data.perform.email.p}</p>
					<input type="text" required="true">
				</fieldset>
				<fieldset>
					<p>${data.perform.event_type.p}</p>
					<input type="text">
				</fieldset>
				<fieldset>
					<p>${data.perform.person_role.p}</p>
					<input type="text">
				</fieldset>
				<fieldset>
					<p>${data.perform.date.p}</p>
					<input type="date" required="true">
				</fieldset>
				<fieldset>
					<p>${data.perform.budget.p}</p>
					<input type="text" required="true">
				</fieldset>
				<fieldset>
					<p>${data.perform.musicians.p}</p>
					<input type="text" required="true">
				</fieldset>
				<fieldset>
					<p>${data.perform.special_requests.p}</p>
					<textarea id="special-requests" cols="30" rows="10"></textarea>
				</fieldset>
				<fieldset>
					<p>${data.perform.extra_questions.p}</p>
					<textarea id="performing-extra-questions" cols="30" rows="10"></textarea>
				</fieldset>
				<button type="submit">Submit</button>
			</form>
		</section>	
	`;
};