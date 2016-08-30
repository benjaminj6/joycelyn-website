let globalData = {
	// Links for external libraries
	normalize_css: '../assets/normalize.css',
	css: 'style.css',
	js: 'app.js',
	jQuery: 'https://code.jquery.com/jquery-3.1.0.min.js',
	font_awesome: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css',
	

	// Links for the header
	home_href: '../home',
	bio_href: '../bio',
	teaching_philosophy_href: '../teaching-philosophy',
	why_private_lessons_href: '../why-private-lessons',
	student_opportunities_href: '../student-opportunities',
	studio_policies_href: '../studio-policies',
	suzuki_method_href: '../suzuki-method',
	performing_href: '../performing',
	blog_href: '../blog',
	contact_href: '../contact',
};

globalData.changeHref = function(property, newHref) {
	this[property] = newHref;
};

module.exports = globalData;