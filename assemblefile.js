let assemble = require('assemble');
let app = assemble();

var template = require('./templates/doc.js');
var body = '<h1>Just an h1 tag</h1>';
var data = {
	pageTitle: 'Joycelyn Choo',
	jQueryPath: 'PATHTOJQUERY',
	fontAwesomePath: 'PATHTOFONTAWESOME',
	cssPath: 'PATHTOCSS',
	body: body
};

app.page('home.html', {content: template})
	.render(data, function(err, view) {
		if (err) { throw err; }	
	});

app.task('default', function() {
	return app.toStream('home.html')
		.pipe(app.renderFile())
		.pipe(app.dest('public/home'));
});

module.exports = app;