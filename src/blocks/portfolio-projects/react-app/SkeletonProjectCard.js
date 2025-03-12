import React from 'react';

export default function SkeletonProjectCard() {
	return (
		<div className="skeleton-card">
			<div className="skeleton-image"></div>
			<div className="skeleton-info">
				<div className="skeleton-project">
					<div className="skeleton-title"></div>
					<div className="skeleton-description"></div>
				</div>
				<div className="skeleton-arrow"></div>
			</div>
		</div>
	)
}
