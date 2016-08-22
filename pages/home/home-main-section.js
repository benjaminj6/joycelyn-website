let html = 
`
	<main>
		<ul class="rotating-pics">
			<li><img src="{{image_1_path}}" alt="Image 1" id="image-1"></li>
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