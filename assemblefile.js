let assemble = require('assemble');
let pretty = require('pretty');

let app = assemble();

// home build 
htmlTask('home');

// // about builds
htmlTask('bio');
htmlTask('teaching-philosophy');

// // teaching builds
htmlTask('why-private-lessons');
htmlTask('student-opportunities');
htmlTask('studio-policies');
htmlTask('suzuki-method');

// // Performing builds
htmlTask('performing');

// // Blog builds
htmlTask('blog');

// // Contact builds
htmlTask('contact');

function htmlTask(name) {
  app.task(`${name}:html`, function() {
    app.page(`${name}.html`, { content: pretty(require(`./html/${name}/${name}`)) });
    
    return app.toStream(`${name}.html`)
      .pipe(app.renderFile())
      .pipe(app.dest(`public/${name}`));
  });
}

module.exports = app;
