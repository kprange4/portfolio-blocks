import React, {useEffect, useState} from 'react';
import ProjectList from './ProjectList';
import SearchForm from './SearchForm'
import FilterForm from "./FilterForm";

export default function BlockApp(props) {
	let [projects, setProjects] = useState([]);
	let [filteredProjects, setFilteredProjects] = useState([]);

	useEffect(() => {
		fetch('/wp-json/wp/v2/project?_embed')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setProjects(data);
				setFilteredProjects(data);
			})
	}, []); // <-- [] defines when the hook is run

	function filterProjects(keyword, category) {

		const results = projects.filter(project => {
			console.log(project?.project_category?.[0])
			const matchesKeyword = project.title.rendered
				.toLowerCase()
				.includes(keyword.toLowerCase());

			const matchesCategory = category
				? project?.project_category?.[0] === category
				: true;

			return matchesKeyword && matchesCategory; // Both conditions must be true
		});

		setFilteredProjects(results);
	}

	return (
		<div>
			<div>
				<SearchForm filterProjects={filterProjects}/>
				<FilterForm filterProjects={filterProjects}/>
			</div>
			<ProjectList posts={filteredProjects}/>
		</div>
	)
}

