import React, {useEffect, useState} from 'react';
import ProjectList from './ProjectList';
import SearchForm from './SearchForm'
import FilterForm from "./FilterForm";
import ProjectPagination from "./ProjectPagination";

export default function BlockApp(props) {
	const [keyword, setKeyword] = useState('');
	const [category, setCategory] = useState('');
	const [projects, setProjects] = useState([]);
	const [filteredProjects, setFilteredProjects] = useState([]);
	const [pagination, setPagination] = useState({});

	useEffect(() => {
		fetch('/wp-json/wp/v2/project?_embed')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				console.log(data[0]._embedded);
				setProjects(data);
				setFilteredProjects(data);
			})
	}, []); // <-- [] defines when the hook is run

	// useEffect(() => {
	// 	// only do this once the API client is ready
	// 	wp.api.loadPromise.done(function() {
	// 		getProjects();
	// 	});
	// }, []);
	//
	// function getProjects(page = 1) {
	// 	const projectsCollection = new wp.api.collections.Project();
	// 	projectsCollection
	// 		.fetch({data: {per_page: 2, page: page}})
	// 		.done(data => {
	// 			console.log(data,projectsCollection.models);
	// 			console.log(projectsCollection)
	// 			// store a COPY of the models in the app
	// 			setProjects([...projectsCollection.models]);
	// 			setPagination({...projectsCollection.state})
	// 		});
	// }

	function filterProjects(keyword, category) {
		const results = projects.filter(project => {
			console.log(project?.project_category?.[0])
			console.log(category)


			console.log('Filtering with:', { keyword, category })
			const matchesKeyword = keyword
				? project.title.rendered.toLowerCase().includes(keyword.toLowerCase())
				: true;

			const matchesCategory = category
				? project?.project_category?.[0] === parseInt(category)
				: true;

			return matchesKeyword && matchesCategory;
		});

		setFilteredProjects(results);
	}

	return (
		<div>
			<div>
				<SearchForm filterProjects={filterProjects} keyword={keyword} setKeyword={setKeyword}/>
				<FilterForm filterProjects={filterProjects} category={category} setCategory={setCategory}/>
			</div>
			<ProjectList posts={filteredProjects}/>
			{/*<ProjectPagination*/}
			{/*	currentPage={pagination.currentPage}*/}
			{/*	totalPages={pagination.totalPages}*/}
			{/*	setPage={getProjects}*/}
			{/*/>*/}
		</div>
	)
}

