let pretty = require('pretty');
let assemble = require('assemble');

module.exports = function(template, data, destination) {

	let app = assemble();

	template = pretty(template);
	
	app.page('index.html', {content: template})
		.render(data, function(err, view) {
			if (err) {
				throw err;
			}
		});

	app.task('default', function() {
		return app.toStream('index.html')
			.pipe(app.renderFile())
			.pipe(app.dest(destination));
	});

	app.task('watch', function() {
			app.watch('./*.js', ['default']);
	});

	return app;
};

