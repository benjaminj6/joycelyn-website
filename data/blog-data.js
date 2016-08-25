let globalData = require('./global-data');

let data = Object.create(globalData);

data.page_title = 'Joycelyn Choo | Bio';
data.heading = 'BLOG';

data.post_1 = {
	title: 'Blog Post #1',
	date: 'mm/dd/yyyy',
	content: {
		par_1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis, voluptates! Corporis nemo dolor dolorum enim tempore delectus ullam quae, repellat quis excepturi neque placeat reprehenderit dolorem odio doloribus consequuntur.',
		par_2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis, voluptates! Corporis nemo dolor dolorum enim tempore delectus ullam quae, repellat quis excepturi neque placeat reprehenderit dolorem odio doloribus consequuntur.',
		par_3: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis, voluptates! Corporis nemo dolor dolorum enim tempore delectus ullam quae, repellat quis excepturi neque placeat reprehenderit dolorem odio doloribus consequuntur.',
	},
};

data.post_2 = {
	title: 'Blog Post #2',
	date: 'mm/dd/yyyy',
	content: {
		par_1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis, voluptates! Corporis nemo dolor dolorum enim tempore delectus ullam quae, repellat quis excepturi neque placeat reprehenderit dolorem odio doloribus consequuntur.',
	},
};

data.post_3 = {
	title: 'Blog Post #3',
	date: 'mm/dd/yyyy',
	content: {
		par_1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis, voluptates! Corporis nemo dolor dolorum enim tempore delectus ullam quae, repellat quis excepturi neque placeat reprehenderit dolorem odio doloribus consequuntur.',
		par_2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro blanditiis, voluptates! Corporis nemo dolor dolorum enim tempore delectus ullam quae, repellat quis excepturi neque placeat reprehenderit dolorem odio doloribus consequuntur.',
	},
};

data.archive = {
	h2: 'Archive',
	this_year: {
		title: '2016',
		august: {
			class: 'august',
			title: 'August',
		},
		september: {
			class: 'september',
			title: 'September'
		}
	}
};

data.changeHref('blog_href', '.');

module.exports = data;