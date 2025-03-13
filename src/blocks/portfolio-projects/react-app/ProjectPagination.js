import React from "react";

export default function ProjectPagination({currentPage, totalPages, setPage}) {

	function previous(){
		if(currentPage > 1) {
			setPage(currentPage - 1);
		}
	}

	function next(){
		if(currentPage < totalPages) {
			setPage(currentPage + 1);
		}
	}

	function pageLinks(){
		const pages = [];
		for(let i = 1; i <= totalPages; i++){
			pages.push(
				<button className={"wp-element-button" + (i === currentPage ? ' active' : '')}
						onClick={() => setPage(i)}
						key={i}
			>{i}</button>);
		}
		return pages;
	}

	return (
		<div className="pagination">
			<button className="wp-element-button"
					onClick={previous}
					disabled={currentPage <= 1}
			>Prev</button>

			{pageLinks()}

			<button className="wp-element-button"
					onClick={next}
					disabled={currentPage >= totalPages}
			>Next</button>
		</div>
	);
}
