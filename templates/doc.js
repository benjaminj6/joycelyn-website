body = `
	<h1>This is the body</h1>
`;

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
	${body}	
</body>
</html>
`;

module.exports = html;