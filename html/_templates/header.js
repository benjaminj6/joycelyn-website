module.exports = function(data) {
	return `
		<header>
			<div class="titles">
				<h1>Joycelyn Choo</h1>
				<h2>Violinist | Teacher</h2>
				<div class="menu-icons">
					<h4>Menu</h4>
					<i class="fa fa-bars"></i>
				</div>
			</div>
			<nav>
				<i class="fa fa-times"></i>
				<ul class="menu">
					<li class="menu-item">
						<a href="${data.home_href}">Home</a>
					</li>
					<li class="menu-item">
						About <i class="fa fa-angle-down"></i>
						<ul class="submenu">
							<li class="submenu-item">
								<a href="${data.bio_href}">Bio</a>
							</li>
							<li class="submenu-item">
								<a href="${data.teaching_philosophy_href}">Teaching Philosophy</a>
							</li>
						</ul>
					</li>
					<li class="menu-item">
						Teaching <i class="fa fa-angle-down"></i>
						<ul class="submenu">
							<li class="submenu-item">
								<a href="${data.why_private_lessons_href}">Why Private Lessons?</a>
							</li>
							<li class="submenu-item">
								<a href="${data.student_opportunities_href}">Student Opportunities</a>
							</li>
							<li class="submenu-item">
								<a href="${data.studio_policies_href}">Studio Policies</a>
							</li>
							<li class="submenu-item">
								<a href="${data.suzuki_method_href}">Suzuki Method</a>
							</li>
						</ul>
					</li>
					<li class="menu-item">
						<a href="${data.performing_href}">Performing</a>
					</li>
					<li class="menu-item">
						<a href="${data.blog_href}">Blog</a>
					</li>
					<li class="menu-item">
						<a href="${data.contact_href}">Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	`;
};