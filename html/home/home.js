let data = require('./home-data');

let body = `
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

module.exports = require('../_templates/doc')(body, data);
