import React from 'react';

export default function ProjectListItem({post}) {
	//console.log(post._links?.['wp:featuredmedia']?.[0].href)
	return (
	<a className="project-link" href={post.acf.project_link}>
		<div className="project-card">
			<div className="project-card-inner">
				<div className="project-card-img" style={{ backgroundImage: `url(${post._embedded?.['wp:featuredmedia']?.[0].source_url})` }}></div>
				<div className="project-card-info">
					<div>
						<h3 className="project-title">{post.title.rendered}</h3>
						<div className="project-description">{post.acf.project_short_description}</div>
					</div>
					<div className="project-card-arrow"></div>
				</div>
			</div>
		</div>
	</a>
)
}
