

let header = require('./header');
let footer = require('./footer');

module.exports = function(body, data) {

	return `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<title>${data.page_title}</title>
				<link rel="stylesheet" href="${data.font_awesome}" />
				<link rel="stylesheet" href="${data.normalize_css}" />
				<link rel="stylesheet" href="${data.css}" />
			</head>
			<body>
				${header(data)}
				${body}
				${footer}
				<script src="${data.jQuery}"></script>
				<script src="${data.js}"></script>
			</body>
		</html>
	`;
};