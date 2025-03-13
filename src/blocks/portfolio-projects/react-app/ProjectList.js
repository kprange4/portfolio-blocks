import React, {useState} from 'react';
import ProjectListItem from "./ProjectListItem";

export default function ProjectList({posts}) {
	return (
		<div className="project-list">
			{posts.map(post => (
				<ProjectListItem post={post} key={post.id}/>
			))}
		</div>
		// <div className="project-list">
		// 	{projects.map(project => (
		// 		<ProjectListItem
		// 			link={project.attributes.acf.project_link}
		// 			image={project.attributes._embedded?.['wp:featuredmedia']?.[0].source_url}
		// 			title={project.attributes.title.rendered}
		// 			description={project.attributes._embedded?.['wp:featuredmedia']?.[0].source_url}
		// 			key={project.id}/>
		// 	))}
		// </div>
	)
}
