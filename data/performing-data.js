let globalData = require('./global-data');

let data = Object.create(globalData);

data.page_title = 'Joycelyn Choo | Performing';

data.heading = 'PERFORMING';
data.intro = {
	par_1: 'I have been performing for over 17 years in orchestral, chamber, and solo settings.',
	par_2: {
		text_part_1: 'You can view samples of my work below. Also, for more information about me, please ',
		bio_href: '../bio',
		text_in_link: 'check out my bio.',
	}
};



data.img = {
	src: 'http://placehold.it/400x500',
	alt: 'Performing Photo'
};

data.video_1 = {
	h3: 'Senior Recital',
	src: 'https://www.youtube.com/embed/4LE38D6sADw'
};

data.video_2 = {
	h3: 'Wienawski Polonaise AM',
	src: 'https://www.youtube.com/embed/qqI6901LMqI'
};

data.video_3 = {
	h3: 'Chamber Music',
	src: 'https://www.youtube.com/embed/3fWe6hUeXes'
};

data.changeHref('performing_href', '.');

module.exports = data;