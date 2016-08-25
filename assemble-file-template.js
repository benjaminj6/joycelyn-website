/*
 *	Some thoughts...
 *
 *	What if I run assemble on individual files rather than one big file?
 *	And then run the tasks from package.json as build:html?
 *	ex.
 * 		build: npm run build:1 && npm run build:2 etc...
 *		build:1:html: assemble --cwd PATH/TO/PAGE/ASSEMBLE/FILE
 *
 *	MAYBE USE THIS FILE AS A FUNCTION THAT CREATES THE ASSEMBLEFILE?
 */
let pretty = require('pretty');
let assemble = require('assemble');

function assembleFile(template, data, destination) {

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
}

module.exports = assembleFile;
