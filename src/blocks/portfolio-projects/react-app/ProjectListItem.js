import React, {useEffect, useState} from 'react';
import SkeletonProjectCard from "./SkeletonProjectCard";

export default function ProjectListItem({post}) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000); // Simulating API delay
	}, []);

	if (isLoading) {
		return <SkeletonProjectCard />;
	}

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
