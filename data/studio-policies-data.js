let globalData = require('./global-data');

let data = Object.create(globalData);

data.page_title = 'Joycelyn Choo | Studio Policies';

data.heading = 'STUDIO POLICIES';
data.intro_par = `Families who participate in my studio must agree to these policies.`;

data.travel = {
	h2: `Travel`,
	par_1: `Only in very rare circumstances do I drive to my student’s homes.  I ask that all students come take lessons in either my La Mirada or Walnut location.  If I do drive to my student’s home, there will be an additional gas fee for every lesson.`,
};

let moreysHref = `<a href="http://www.moreysmusic.com/" target="blank">Morey's Music Shop</a>`;

data.parents = {
	h2: `For Parents`,
	practice_partners: {
		h3: `Parents as practice partners:`,
		par_1: `I believe that parent’s participation in their student’s musical education is the number one key to success.  Families who study with me should designate one practice partner (usually one parent, but sometimes a babysitter or grandparent) to bring the student to lesson, take diligent notes during the lesson, ask questions at appropriate times during the lesson, daily play the recording for the student, and daily practice each day with the student at home.`,
		par_2: `Unless a student has been approved to practice on their own, a parent or practice partner should be present during lessons and practices at all times.`,
		par_3: `Parents, I understand that many of you are busy and that you may not have time for this intensive responsibility.  The violin is a difficult instrument that requires the help of an adult to learn.  If you do not have the time to practice and attend lessons, please assign someone else to do these tasks.  Otherwise, my studio may not be the correct fit for you.`,
	},
	being_late: {
		h3: `Being late:`,
		par_1: `Unfortunately, my schedule is not very flexible. If you are late to a lesson, I will not be able to make up the lost time by pushing the lesson later.  There will be no refunds or make ups for late lessons.`,
	},
	makeups: {
		h3: `Makeups:`,
		par_1: `I understand that sometimes schedules may change and you might need to cancel or reschedule lessons. If you need to cancel a lesson, please give me a 72-hour notice and I will be able to give you a make-up lesson. I will only be able to offer a make-up lesson if I am given a 3-day notice about a cancellation. I will no longer be able to give make up lessons to families that fail to give me a 3-day cancellation notice.`,
		par_2: `The only exception to this rule is if there is a family emergency or unpredictable circumstance (such as car trouble). Please note that forgetting about lessons or traffic are not valid examples of “unpredictable circumstances”.`,
		par_3: `Regarding illness, I allow my students to take three sick days a year.  3 lesson out of the year, you may take a sick day (less than 24 hour notice) and I will schedule a make up lesson with you.  If a student cancels due to sickness after 3 sick days, that lesson will be cancelled and the cost forfeited.`,
	},
	new_students: {
		h3: `New Students:`,
		par_1: `I require all new students to make a commitment to 6 months of lessons.  The beginning few months of learning the violin can be a little slow so I encourage students to commit to at least 6 months of lesson before considering stopping lessons.  I believe that after 6 months, the student has given violin a “fair shot”.`,
	},
	teacher_error: {
		h3: `Teacher error:`,
		par_1: `If I am more than 15 minutes late to a lesson, I will either refund your money for that lesson, or I will give you a makeup lesson. If I cancel a lesson, I will also give you a refund or give you a makeup lesson. I will try my best to keep a steady schedule, but unfortunately plans change very quickly sometimes.`,
	},
	payment: {
		h3: `Payment:`,
		par_1: `At the first lesson of every month, please pay for all the lessons of that month upfront.  Payments can be made with cash or personal checks addressed to “Joycelyn Choo”. Please include the month under the subject line. If you are late on the monthly payment, a $15 dollars late fee will be charged.`,
		par_2: `Please only pay for one month of tuition at a time.  I will be sending out a billing statement the week before tuition is due so that each family will be informed of their fees for that month.  Typically, I do not discuss my tuition rates over email or display them on my website.  I prefer to discuss that in person during a FREE trial lesson.`,
	},
	links: {
		moreys_href: `<a href="http://www.moreysmusic.com/" target="blank">Morey's Music Shop</a>`,
	},
};

data.parents.instruments = {
	h3: `Instruments:`,
	par_1: `Picking the right instrument is absolutely crucial to your child’s success with the violin.  If you do not already have a violin, PLEASE DO NOT SELECT ONE WITHOUT ME.  I understand that some families are under a budget and would rather not spend too much money on an instrument especially if the child will eventually outgrow the instrument. This is why I would recommend renting a violin from ${data.parents.links.moreys_href} in Lakewood. Morey’s provides high quality violins in every size at affordable rates. If this option does not fit your family’s needs, please talk to me about it and we can work together to find a solution. The last thing I want is for one of my students to end up with a badly made violin that harms their technique.`,
};

data.students = {
	h2: `For Students`,
	fingernails: {
		h3: `Fingernails:`,
		par_1: `As you’ll discover, it’s very difficult to play the violin with long fingernails. If you come to a lesson with long fingernails, you will be charged 10 cents for every nail that is too long. Clipping your nails during the lesson takes time out of our lesson that we could otherwise spend working on repertoire. Your money will be added to the “tip jar”. Occasionally, I will give opportunities for my students to win the money in the tip jar.`,
	},
	listening: {
		h3: `Listening:`,
		par_1: `One of the most important components of the Suzuki Method is listening. If your student is playing past Twinkle,listen to your CD at least once a day, EVERY DAY. This will allow you to learn pieces with more ease.`,
	},
	practicing: {
		h3: `Practicing:`,
		par_1: `I would like all students in my studio to practice at least 6 days a week with their practice partner. Practice is so fundamental to success with the violin.  If students show consistent lack of practice, they will be placed on probation.  If they continue to come unprepared to lessons due to lack of practice, they will be excused from a lesson (the cost of that lesson will also be forfeited).  After the first excusal, if they continue to come unprepared to lessons, then I will excuse them from my studio.`,
	},
};

data.changeHref('studio_policies_href', '.');

module.exports = data;
