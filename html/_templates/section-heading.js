module.exports = function(data) {
	
	if (!data.heading_classes) {
		data.heading_classes = ''
	}

	return `
		<div class="section-heading${data.heading_classes}">
			<h1>${data.heading}</h1>
			<hr>
		</div>	
	`;
};

