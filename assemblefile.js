let assemble = require('assemble');
let app = assemble();

var template = require('./templates/page.js');
var data = {
	pageTitle: 'Joycelyn Choo',
	jQueryPath: 'PATHTOJQUERY',
	fontAwesomePath: 'PATHTOFONTAWESOME',
	cssPath: 'PATHTOCSS'
};

app.page('home.html', {content: template})
	.render(data, function(err, view) {
		if (err) { throw err; }	
	});

app.task('default', function() {
	return app.toStream('pages')
		.pipe(app.renderFile())
		.pipe(app.dest('public'));
});

module.exports = app;