let pretty = require('pretty');
let assemble = require('assemble');

module.exports = function(template, data, destination) {

  let app = assemble();

  app.task('default', function() {
	  template = pretty(template);
    app.page('index.html', { content: template })
      .render(data, function(err, view) {
        if (err) {
          throw err;
        }
      });

    return app.toStream('index.html')
      .pipe(app.renderFile())
      .pipe(app.dest(destination));
  });

  return app;
};
