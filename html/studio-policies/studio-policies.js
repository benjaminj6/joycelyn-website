let data = require('./studio-policies-data');
let heading = require('../_templates/section-heading')(data);

let body = `
	<main>
		<img src="../assets/images/bio.jpg" alt="Studio Policies">
		<section>
			${heading}
			<div class="text">
				<p>Families who participate in my studio must agree to my studio policies. You can view a PDF of them <a href="../assets/violin-studio-policies.docx">here</a>.</p>
			</div>
		</section>
	</main>
`;

module.exports = require('../_templates/doc')(body, data);
