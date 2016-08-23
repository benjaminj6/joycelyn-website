let globalData = require('./global-data');

let data = Object.create(globalData);

data.page_title = 'Joycelyn Choo | Parent Education';

data.heading = 'PARENT EDUCATION';

data.par_1 = `Parent education is something that I am passionate about.  Because I believe that parents are my greatest allies in the process of teaching, I offer many forms of parent education.  All families who are new to the violin are required to sign up for 3 forty-five minute parent education lessons with me.  These parent education sessions are strictly between the teacher and the practice parent and occur before the child starts his/her first lesson.  In these lessons, we will cover bowhold technique, Suzuki methodology, practice techniques, lesson etiquette, and much more.`;
data.par_2 = `Additionally, I occasionally hold private parent-teacher conferences to check in on how the students are doing during home practice.  These meetings allow me to brainstorm with parents on how to meet their child’s individual practice needs.`;
data.par_3 = `In addition to parent teacher conferences, I have partnered with a fellow violin teacher, Amanda Sansonetti to offer continuing parent education.  While students are in violin group class, parents will occasionally meet with a violin teacher (whoever is not teaching the group class that day) and discuss a violin topic (helping students practice, or helping them perform).  Our goal with these continuing parent education classes is to provide community and education to parents.`;

data.changeHref('parent_education_href', '.');

module.exports = data;