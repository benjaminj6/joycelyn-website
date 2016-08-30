module.exports = {
	aTag: function(href, text) {
		return `<a href="${href}" target="_blank">${text}</a>`;
	},

	removeBreaks: function(string) {
		return string.replace('/\\n/g', '');
	},


};