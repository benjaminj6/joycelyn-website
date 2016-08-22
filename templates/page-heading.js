function createPageHeading(headingData, classData = '') {

let classes = classData;
let heading = headingData;

let html = `
	<div class="page-heading {{classes}}">
		<h1>{{${heading}}}</h1>
		<hr>
	</div>	
`;

return html;
}

module.exports = createPageHeading;