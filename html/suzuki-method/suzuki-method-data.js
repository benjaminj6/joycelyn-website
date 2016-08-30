let _ = require('../../utils.js');

let globalData = require('../global-data');
let data = Object.create(globalData);

data.page_title = 'Joycelyn Choo | Suzuki Method';
data.heading = 'SUZUKI METHOD';

data.par_1 = _.removeBreaks(`The( Suzuki Method is a very popular method of teaching the violin.  If you are a 
		prospective student, ${ _.aTag('https://suzukiassociation.org/about/suzuki-method/', 
		'please read briefly about the Suzuki Method') } before contacting me.  I am a product of the 
		Suzuki method and I can confidently say that Suzuki allowed me to learn the fundamentals of 
		violin positioning and ear training which allowed me to be more “free” as a musician.  
		I have taken training courses with the Suzuki Associations of America in order to bring this 
		method to my students.  I wholeheartedly believe in the fundamental core pillars of the Suzuki 
		Method which include: `),

data.list_1 = {
	h4: `Love is essential to Growth`,
	par_1: _.removeBreaks(`In my studio, students are people first and violinist second.  My goal 
		in teaching is to love my students and care for them in the ways that I can.  Teaching the 
		violin is just my excuse to get to do that! :]`),
};

data.list_2 = {
	h4: `Every Child Can`,
	par_1: _.removeBreaks(`No matter what gender or learning disability, every child can learn to 
		play the violin just like every child can learn to speak.`),
};

data.list_3 = {
	h4: `Ear Training is Essential`,
	par_1: _.removeBreaks(`I teach all of my beginning students to play by ear.  This is because 
		I want to emphasize the importance of technique and ear training without the distraction of 
		learning how to reading notes. Students begin to read notes usually by 
		late book 1 of the Suzuki books.`),
};

data.list_4 = {
	h4: `The Suzuki Triangle`,
	par_1: _.removeBreaks(`The Suzuki triangle is formed from the combined efforts of the teacher, 
		parent, and student.  It is the idea that success happens when all three people 
		collaborate in order to develop the skills of the student.`),
};

data.changeHref('suzuki_method_href', '.');

module.exports = data;