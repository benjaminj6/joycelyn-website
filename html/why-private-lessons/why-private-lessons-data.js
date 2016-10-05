let _ = require('../../utils.js');

let globalData = require('../global-data');
let data = Object.create(globalData);

data.page_title = 'Joycelyn Choo | Why Private Lessons?';
data.heading = 'WHY PRIVATE LESSONS?';

data.img = {
	src: '../assets/images/why-private-lessons.jpg',
	alt: 'Private Lessons Photo'
};

data.par_1 = _.removeBreaks(`The benefits of music study have been closely studied in recent years and the results 
	have shown that studying an instrument is extremely beneficial for the students who choose to 
	invest in it. Not only does playing an instrument have high mental benefits such as developing 
	fine motor skill that require both sides of the brain, increasing problem solving capacity, 
	training verbal memory, improving spatial-temporal reasoning, and raising IQ, but it’s also 
	been shown that playing instrument has emotional and mental benefits.`);

data.par_2 = _.removeBreaks(`Artistic expression is an outlet that contributes the emotional health of those who 
	play an instrument and develops attention span and self-discipline. Playing an instrument 
	develops the brain in ways that no other skill does.  Playing an instrument has been proven 
	to help with math, science and problem solving skills, and has been correlated with higher 
	reading scores.`);

data.par_3 = _.removeBreaks(`Curious to know more about private lessons?  Sign up for a 
	${ _.aTag('../contact', 'free trial lesson') } with me! You don't even need an instrument for 
	this trial lesson.  Bring all of your questions.  This offer is available to any 
	student who is new to my studio.`);

data.changeHref('why_private_lessons_href', '.');

module.exports = data;