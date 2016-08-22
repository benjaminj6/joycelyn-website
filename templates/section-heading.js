function createSectionHeading(headingData, classData = null) {
	
	let html = `
		<div class="section-heading{{${classData}}}">
			<h1>{{${headingData}}}</h1>
			<hr>
		</div>	
	`;

	return html;
}

module.exports = createSectionHeading;