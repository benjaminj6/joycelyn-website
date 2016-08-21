/*
 *	Data to be inserted:
 *	
 *	pageTitle
 *	jQueryPath
 *	fontAwesomePath
 *	cssPath
 *	body -- must be another string of html!
 * 	
 */

var html = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>{{pageTitle}}</title>
	<link rel="stylesheet" href="{{jQueryPath}}" />
	<link rel="stylesheet" href="{{fontAwesomePath}}" />
	<link rel="stylesheet" href="{{cssPath}}" />
</head>
<body>
	{{{body}}}	
</body>
</html>
`;

module.exports = html;