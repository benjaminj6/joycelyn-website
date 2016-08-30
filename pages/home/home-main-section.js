let html = 
// Images in the rotating picture banner wil lbe done as background images to facilitate media queries.
// Is there a way to do this in semantic html?

`
	<main>
		<ul class="rotating-pics">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
		<div class="rotating-pics-nav">
			<i class="fa fa-angle-left"></i>
			<ul>
				<li>•</li>
				<li>•</li>
				<li>•</li>
			</ul>
			<i class="fa fa-angle-right"></i>
		</div>
	</main>
`;

module.exports = html;