module.exports = 
// Images in the rotating picture banner wil lbe done as background images to facilitate media queries.
// Is there a way to do this in semantic html?

`
	<main>
		<ul class="rotating-pics">
			<li class="pic-1"></li>
			<li class="pic-2"></li>
			<li class="pic-3"></li>
			<li class="pic-4"></li>
		</ul>
		<div class="rotating-pics-nav">
			<i class="fa fa-angle-left"></i>
			<ul>
				<li>
					<i class="fa fa-circle-thin"></i>
				</li>
				<li>
					<i class="fa fa-circle-thin"></i>
				</li>
				<li>
					<i class="fa fa-circle-thin"></i>
				</li>
				<li>
					<i class="fa fa-circle-thin"></i>
				</li>
			</ul>
			<i class="fa fa-angle-right"></i>
		</div>
	</main>
`;