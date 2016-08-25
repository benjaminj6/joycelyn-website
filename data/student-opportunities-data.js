let globalData = require('./global-data');

let data = Object.create(globalData);

data.page_title = 'Joycelyn Choo | Student Opportunities';

data.heading = 'STUDENT OPPORTUNITIES';
data.intro_par = `Students in my studio are enrolled in weekly private lessons in which they will study their instrument through use of suzuki repertoire, technique, and general music theory knowledge. In addition, students are required to attend weekly group classes to further develop solo performance, group performance, technique, practicing skills, and participate in games and activities with other students.  Students are also expected to perform twice a year in studio recitals where they can also benefit from the performances of their peers.  I know from experience that performance opportunities are the highlight of musical study.  It is a joy for all students to be able to perform and see their hard work come to fruition.`;  

data.weekly_lessons = {
	h2: 'WEEKLY LESSONS',
	img: {
		src: 'http://placehold.it/500x300',
		alt: 'Weekly Lessons Photo'
	},
	par_1: `Private instruction in music is highly individualized and can be tailored to fit the individual needs of the student. Though many schools offer music instruction, teachers’ time with their students is highly limited. In a private lessons, the student has the teacher’s full time and attention every week for a set amount of time. Students who study privately make more progress and are generally more satisfied in their music study than those who only study it in school because they can focus more on proper technique and holistic learning than their colleagues who only learn in a class setting.  Additionally, through private instruction students have the opportunity to be individually mentored by their teacher.`,
};

data.group_classes = {
	h2: 'GROUP CLASSES',
	img: {
		src: 'http://placehold.it/500x300',
		alt: 'Group Classes Photo'
	},
	par_1: `Students in my student are required to participate in supplementary group classes that meet each week.  Each group class is divided into two sections: theory time and ensemble time.  Theory time will include ear training, rhythmic training, music theory, and music history without the violin.  Ensemble time will include learning to begin & end together, playing in tune together, cueing, following, and generally thinking on your toes while playing.The Suzuki literature will provide the primary curriculum for the group classes.  Group classes allow students to thrive socially and musically.  The benefits of group class are countless.`,
};

data.recitals = {
	h2: 'BI-ANNUAL RECITALS',
	img: {
		src: 'http://placehold.it/500x300',
		alt: 'Bi-Annual Recital Photo'
	},
	par_1: `Every semester, my students perform in a recital.  Recitals are an exciting time for students to get to show off their hard work.  After each recital, the kids are rewarded with a potluck party to celebrate their hard work.`,
};

data.parents = {
	h2: 'PARENT EDUCATION',
	img: {
		src: 'http://placehold.it/500x300',
		alt: 'Parent Education Photo'
	},
	par_1: `Parent education is something that I am passionate about.  Because I believe that parents are my greatest allies in the process of teaching, I offer many forms of parent education.  All families who are new to the violin are required to sign up for 3 forty-five minute parent education lessons with me.  These parent education sessions are strictly between the teacher and the practice parent and occur before the child starts his/her first lesson.  In these lessons, we will cover bowhold technique, Suzuki methodology, practice techniques, lesson etiquette, and much more.`,
	par_2: `Additionally, I occasionally hold private parent-teacher conferences to check in on how the students are doing during home practice.  These meetings allow me to brainstorm with parents on how to meet their child’s individual practice needs.`,
	par_3: `In addition to parent teacher conferences, I have partnered with a fellow violin teacher, Amanda Sansonetti to offer continuing parent education.  While students are in violin group class, parents will occasionally meet with a violin teacher (whoever is not teaching the group class that day) and discuss a violin topic (helping students practice, or helping them perform).  Our goal with these continuing parent education classes is to provide community and education to parents.`,
};

data.changeHref('student_opportunities_href', '.');

module.exports = data;