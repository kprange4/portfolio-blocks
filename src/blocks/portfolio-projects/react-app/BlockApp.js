import React, {useEffect, useState} from 'react';
import ProjectList from './ProjectList';
import SearchForm from './SearchForm'

export default function BlockApp(props) {
	let [projects, setProjects] = useState([]);
	let [filteredProjects, setFilteredProjects] = useState([]);

	useEffect(() => {
		fetch('/wp-json/wp/v2/project')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setProjects(data);
				setFilteredProjects(data);
			})
	}, []); // <-- [] defines when the hook is run

	function filterProjects(keyword) {
		const results = projects.filter(project => {
			return project.title.rendered.toLowerCase().includes(keyword.toLowerCase());
		});
		setFilteredProjects(results);
	}

	return (
		<div>
			<div>
			<SearchForm filterProjects={filterProjects} />
			</div>
			<ProjectList posts={filteredProjects}/>
		</div>
	)
}

