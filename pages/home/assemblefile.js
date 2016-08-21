let assemble = require('assemble');
let app = assemble();

// var body = require('../../templates/header');

// Calls body data to create the full html
// var template = require('../../templates/doc.js')(body);
let template = require('./home');
var data = require('../../data/home-data');

// console.log(data.home_href);

app.page('index.html', {content: template})
	.render(data, function(err, view) {
		if (err) { throw err; }	
	});

app.task('default', function() {
	return app.toStream('index.html')
		.pipe(app.renderFile())
		.pipe(app.dest('../../public/home'));
});

module.exports = app;

/*
 *	Some thoughts...
 *
 *	What if I run assemble on individual files rather than one big file?
 *	And then run the tasks from package.json as build:html?
 *	ex.
 * 		build: npm run build:1 && npm run build:2 etc...
 *		build:1:html: assemble --cwd PATH/TO/PAGE/ASSEMBLE/FILE
 *
 */