 let globalData = require('./global-data');

let data = Object.create(globalData);

data.page_title = 'Joycelyn Choo | Teaching Philosophy';
data.heading = 'TEACHING PHILOSOPHY';

data.par_1 = `While I love performing, my true passion lies in teaching the violin.  
	Although I teach students of almost all ages, I specifically love teaching young children. In 
	my past experience with teaching children, I have had the privilege of seeing their simple joy 
	and eagerness. I believe that children can best thrive and learn if their learning styles are 
	catered to and if they are loved.`.replace(`/\\n/g`, ``);  

data.par_2 = `My greatest goal as a teacher is to love my students. Originally, Suzuki initiated his 
	violin teaching program not for the purposes of raising musical prodigies (which incidentally 
	ended up happening) but for the purposes of nurturing children into noble souls who eagerly 
	engaged in the pursuit of goodness, beauty, and truth. I believe that since goodness, beauty, and 
	truth are inherent in music, it has the potential to transform someone’s life. However, without the 
	catalyst of love, music can be rendered to a mere means of selfish gain. I believe that it is through 
	the unconditional love that parents and teachers offer their kids/students, regardless of their 
	skill, that the students begin to explore the beauty of music.`.replace(`/\\n/g`, ``);

data.par_4 = `To find out more about my teaching philosophy, please listen to my lecture that I 
	gave at Biola University entitled “What is my Role as a Music Teacher?”`.replace(`/\\n/g`, ``);

data.par_5 = `If you're interested in taking lessons, please sign up for a 
	<a href="../contact" target="_blank">free trial lesson</a>!`.replace(`/\\n/g`, ``);


data.changeHref('teaching_philosophy_href', '.');

module.exports = data;