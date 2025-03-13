import {SelectControl} from "@wordpress/components";
import React, {useEffect, useState} from "react";

export default function FilterForm({filterProjects, category, setCategory, keyword}){

	//console.log(category);

	return (
		<SelectControl
			className="project-filter"
			label="Filter Category:"
			value={category}
			options={ [
				{ label: 'Select a Category', value: '' },
				{ label: 'Web Design', value: 3 },
				{ label: 'Web Development', value: 2 },
				{ label: 'Graphic Design', value: 1 },
			] }
			onChange={(category) => {
				setCategory(Number(category));
				filterProjects(keyword, category)}}
		/>
	)
}
