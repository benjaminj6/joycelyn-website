let globalData = require('./global-data');

let data = Object.create(globalData);

data.page_title = 'Joycelyn Choo | Bio';
data.heading = 'BIO';

data.par_1 = `Hello!  So glad you found my page.  Here’s a little information about myself.  I started taking violin lessons at the age of four in a Suzuki violin program.  Since then, I have gained 17 years of violin experience and 12 years of piano experience. In the past, I have studied violin at the prestigious Colburn school of music in Los Angeles.  After studying for four years under Elizabeth Larson, Sam Fischer, and Jason Uyeyama, I received a Bachelor of Music degree in Violin Performance from Biola University.  My performing achievements include: soloing with the LLA Chamber Orchestra, leading the Honors Biola String Quartet, performing in a masterclass taught by the world renowned Menahem Pressler (Beaux Arts Trio), performing with the Biola Symphony Orchestra as assistant concertmaster, and reaching level IX in MTAC (Piano Performance).`;  
data.par_2 = `Aside from my performing endeavors, I runs a Suzuki Violin program in the Walnut and Fullerton areas.  Under the tutelage of Edmund Sprunger, Elizabeth Larson, April Losey, and Karen Ahmadi, I have developed my unique violin pedagogy program that suits the needs of all students all ages.`;
data.par_3 = 'In my free time, I enjoy working with middle schoolers and high schoolers at church, reading good books, and watching thoughtful movies.';
data.resume_href = 'http://www.linkedin.com/in/joycelyn-choo-a9b24a123';

data.changeHref('bio_href', '.');

module.exports = data;