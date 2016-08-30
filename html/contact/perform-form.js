module.exports = `
<section id={{perform.section_id}}>
	<div class="intro">
		<h2>{{perform.intro.h2}}</h2>
		<p>{{perform.intro.par_1}}</p>
	</div>
	<form id="{{perform.form_id}}">
		<fieldset>
			<legend>{{perform.name.legend}}</legend>
			<input type="text" required="true">
		</fieldset>
		<fieldset>
			<legend>{{perform.phone.legend}}</legend>
			<input type="text" required="true">
		</fieldset>
		<fieldset>
			<legend>{{perform.email.legend}}</legend>
			<input type="text" required="true">
		</fieldset>
		<fieldset>
			<legend>{{perform.event_type.legend}}</legend>
			<input type="text">
		</fieldset>
		<fieldset>
			<legend>{{perform.person_role.legend}}</legend>
			<input type="text">
		</fieldset>
		<fieldset>
			<legend>{{perform.date.legend}}</legend>
			<input type="date" required="true">
		</fieldset>
		<fieldset>
			<legend>{{perform.budget.legend}}</legend>
			<input type="text" required="true">
		</fieldset>
		<fieldset>
			<legend>{{perform.musicians.legend}}</legend>
			<input type="text" required="true">
		</fieldset>
		<fieldset>
			<legend>{{perform.special_requests.legend}}</legend>
			<input type="text">
		</fieldset>
		<fieldset>
			<legend>{{perform.extra_questions.legend}}</legend>
			<input type="text">
		</fieldset>
		<button type="submit">Submit</button>
	</form>
</section>	
`;