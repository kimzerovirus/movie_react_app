import React from 'react';
import { Link } from 'react-router-dom';

const SearchIcon = () => {
	return (
		<div className="search-icon">
			<Link to="/search">
				<img src={`${process.env.PUBLIC_URL}/search_icon.svg`} alt="" />
			</Link>
		</div>
	);
};

export default SearchIcon;
