let assemble = require('assemble');
let pretty = require('pretty');

let app = assemble();

function assembleTemplate(template, data, destination) {
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
}

// Home builds
app.task('home:html', assembleTemplate('html/home/home.js', 'html/home/home-data.js', 'public/test'));

// About builds
app.task('bio:html', assembleTemplate('html/bio/bio.js', 'html/bio/bio-data.js', 'public/test'));
app.task('teaching-philosophy:html', assembleTemplate('html/teaching-philosophy/teaching-philosophy.js', 'html/teaching-philosophy/teaching-philosophy-data.js', 'public/test'));

// Teaching builds
app.task('why-private-lessons:html', assembleTemplate('html/why-private-lessons/why-private-lessons.js', 'html/why-private-lessons/why-private-lessons-data.js', 'public/test'));
app.task('student-opportunities:html', assembleTemplate('html/student-opportunities/student-opportunities.js', 'html/student-opportunities/student-opportunities-data.js', 'public/test'));
app.task('studio-policies:html', assembleTemplate('html/studio-policies/studio-policies.js', 'html/studio-policies/studio-policies-data.js', 'public/test'));
app.task('suzuki-method:html', assembleTemplate('html/suzuki-method/suzuki-method.js', 'html/suzuki-method/suzuki-method-data.js', 'public/test'));

// Performing builds
app.task('performing:html', assembleTemplate('html/performing/performing.js', 'html/performing/performing-data.js', 'public/test'));

// Blog builds
app.task('blog:html', assembleTemplate('html/blog/blog.js', 'html/blog/blog-data.js', 'public/test'));

// Contact builds
app.task('contact:html', assembleTemplate('html/contact/contact.js', 'html/contact/contact-data.js', 'public/test'));


module.exports = app;
