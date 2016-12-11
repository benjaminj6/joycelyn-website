$(document).ready(function() {
	
	var classes = ['bg-image-1', 'bg-image-2', 'bg-image-3', 'bg-image-4'];
	var current = 0;

	window.setInterval(function() {
		if (current >= classes.length - 1) {
			current = 0;
		} else {
			current += 1;
		}

		var $body = $('body');

		$body.removeClass();
		$body.addClass(classes[current]);
	}, 4000);
});