let globalData = require('./global-data');

let data = Object.create(globalData);

data.page_title = 'Joycelyn Choo | Contact';

data.heading = 'CONTACT';

function aTag(href, text) {
	return `<a href="${href}">${text}</a>`;
};

data.lessons = {
	section_id: 'lessons',

	intro: {
		suzuki_method_link: aTag('../suzuki-method', 'Suzuki Method'),
		studio_policies_link: aTag('../studio-policies', 'Studio Policies'),
		student_opportunities_link: aTag('../student-opportunities', 'Student Opportunities'),

		h2: 'Prospective Student Application',
		par_1: `Hello!  I’m so glad that you’re interested in violin lessons with me!  <span>I offer a free trial lesson to anyone who is interested in violin lessons.</span>  You will NOT need a violin for this trial lesson.  Before contacting me, please read through the ${this.suzuki_method_link}, ${this.studio_policies_link}, and ${this.student_opportunities_link} sections!  Please note that I do not discuss my tuition rates over email or display it online.  I prefer to talk to parents about that in the trial lesson.`,
		par_2: `Please fill out the form below and I will get back to you within the day.  I am very quick to respond to my emails!`,
	},

	form_id: 'lessons-form',
	parent_name: {
		legend: 'Name (Parent or Guardian)*'
	},
	student_name: {
		legend: 'Name (Prospective Student)*',
	},
	student_age: {
		legend: `Prospective Student's Age*`,
	},
	student_grade: {
		legend: `Prospective Student's Grade (if applicable)`,
	},
	student_experience: {
		legend: 'Please list any musical experience that the student might have (if none, please write "new beginner")',
	},
	previous_suzuki_teacher: {
		legend: `If you’ve taken violin lessons before, did you study with a Suzuki or Traditional teacher?`,
		option_1: {
			val: 'suzuki',
			text: 'Suzuki',
		},
		option_2: {
			val: 'traditional',
			text: 'Traditional',
		},
	},
	extracurriculars: {
		legend: 'Please list all other extracurriculars that you are involved in',
	},
	location: {
		legend: 'Are you interested in lessons in Walnut or in La Mirada?*',
		name: 'location',
		option_1: {
			val: 'walnut',
			text: 'Walnut',	
		},
		option_2: {
			val: 'la mirada',
			text: 'La Mirada',
		},
	},
	coming_from: {
		legend: 'What area are you coming from?',
	},
	trial_lesson: {
		legend: 'What days would you be available for a free trial lesson? (Select all that apply)',
		monday: {
			id: 'monday',
			label: 'Monday',
		},
		tuesday: {
			id: 'tuesday',
			label: 'Tuesday',
		},
		wednesday: {
			id: 'wednesday',
			label: 'Wednesday',
		},
		thursday: {
			id: 'thursday',
			label: 'Thursday',
		},
		friday: {
			id: 'friday',
			label: 'Friday',
		},
		saturday: {
			id: 'saturday',
			label: 'Saturday',
		},
		sunday: {
			id: 'sunday',
			label: 'Sunday',
		},
	},
	group_classes: {
		legend: `All students are required to enroll in a mandatory group class that meets once a week in addition to weekly lessons is this a commitment that your family is willing to make?`,
		option_1: {
			val: 'yes',
			text: 'Yes',
		},
		option_2: {
			val: 'no',
			text: 'No'
		},
	},
	extra_questions: {
		legend: 'Please add any additional questions or concerns here.',
	},	
	email: {
		legend: 'Email*'
	}
};

data.perform = {
	section_id: 'perform',
	
	intro: {
		h2: 'Performance Request',
		par_1: 'When she is not teaching, Joycelyn loves to perform with her musical colleagues.  If you are interested in contracting Joycelyn to play for your special event (wedding, funeral, birthday party etc.) please fill out the form below to get a free quote.  If you are looking for a specific group of musicians (String quartet, String Trio, Piano Trio, String Duo etc.)  please indicate it below in the options and Joycelyn will be able to arrange a group for you.',
	},

	name: {
		legend: 'Name*',
	},
	phone: {
		legend: 'Phone Number*',
	},
	email: {
		legend: 'Email*',
	},
	event_type: {
		legend: 'Type of event (wedding, party, etc.)',
	},
	person_role: {
		legend: 'Your role in the event (bride, groom, coordinator, host, birthday person, etc.)',
	},
	date: {
		legend: 'The date of your event*',
	},
	budget: {
		legend: 'Budget (Please expect at least $100 per person)*',
	},
	musicians: {
		legend: 'Musicians desired (Quartet, Trio, Duo, Solo — Please specify what instruments you would like)*',
	},
	special_requests: {
		legend: 'Special Requests for music selection (I will be sending you some selections to choose from, but let me know if you have a request).',
	},
	extra_questions: {
		legend: 'Please add any additional questions or concerns here.',
	},
};

data.changeHref('contact_href', '.');

module.exports = data;