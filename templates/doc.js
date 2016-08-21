/*
 *	Data to be inserted:
 *	
 *	page_title
 *	font_awesome
 *	normalize_css
 *	css
 *	body -- must be another string of html!
 *	jQuery
 * 	js
 *	
 */


function createDoc(bodyHtml) {
	let body = bodyHtml;

	let doc = 
	`<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>{{page_title}}</title>
		<link rel="stylesheet" href="{{font_awesome}}" />
		<link rel="stylesheet" href="{{normalize_css}}" />
		<link rel="stylesheet" href="{{css}}" />
	</head>
	<body>
		${body}
		<script src="{{jQuery}}"></script>
		<script src="{{js}}"></script>
	</body>
	</html>
	`;

	return doc;
}

module.exports = createDoc;