import {TextControl} from "@wordpress/components";
import React, {useEffect, useState} from "react";

export default function SearchForm({filterProjects, keyword, setKeyword, category}) {

	return (
		<TextControl
			className="project-search"
			label='Search:'
			value={keyword}
			onChange={(keyword) => {
				setKeyword(keyword);
				filterProjects(keyword, category)}}
		/>
	)
}
