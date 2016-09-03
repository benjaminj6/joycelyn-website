let _ = require('../../utils');

let globalData = require('../global-data');
let data = Object.create(globalData);

data.page_title = 'Joycelyn Choo | Bio';
data.heading = 'ABOUT ME';

data.img = {
	src: '../assets/images/bio.jpg',
	alt: 'Joycelyn Choo',
};

data.par_1 = `Hello!  So glad you found my page.  Let me tell you a little bit about myself.  
`;

data.par_2 = _.removeBreaks(`When I was four years old, my mother asked me if I wanted to play the 
	violin.  I probably didn’t know what I was getting myself into, but I said yes, so we found a 
	suzuki private teacher to help us out.  From the get go, I loved going to violin lessons.  
	I especially loved the creative songs and games that my teacher would assign to me. Over the 
	course of this journey, music has meant so much to me.  In my happiest of times, music only 
	added to my joy.  In my lowest of times, music consoled me and gave me peace.  I am so 
	appreciative of this gift of beauty that I’ve been given.`);  

data.par_3 = _.removeBreaks(`So what do I do with this gift?  Well, I like to believe that I’m 
	in the business of sharing.  Whether that’s performing or teaching, my goal as a violinist is 
	to share the gloriousness of music with people.  If I’m performing, I hope to give audiences the 
	same goose-bumps feeling that I felt when I first heard Rachmaninoff's Piano Concerto No.2.  
	If I’m teaching, I hope to give my students the same exhilaration and joy that I have 
	experienced when I perform.`);

data.par_4 = _.removeBreaks(`Here are some of the skills that I’ve acquired to help me share this 
	gift.  I have over 17 years of violin experience and 12 years of piano experience. In the past, 
	I have studied violin at the prestigious Colburn school of music in Los Angeles.  I received a 
	Bachelor of Music degree in Violin Performance from Biola University.  My performing achievements 
	include: soloing with the LLA Chamber Orchestra, leading the Honors Biola String Quartet, 
	performing in a masterclass taught by the world renowned Menahem Pressler (Beaux Arts Trio), 
	and performing with the Biola Symphony Orchestra as assistant concertmaster.  I have studied 
	violin pedagogy with the Suzuki Association of the Americas for 3 years and counting.`);

data.par_5 = _.removeBreaks(`You can view my resume 
	${_.aTag('http://www.linkedin.com/in/joycelyn-choo-a9b24a123', 'here.')}`);

data.changeHref('bio_href', '.');

module.exports = data;