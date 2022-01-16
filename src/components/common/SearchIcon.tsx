import React from 'react';
import { Link } from 'react-router-dom';

//style
import { SearchWrapper } from './SearchIcon.style';

const SearchIcon = () => {
	return (
		<SearchWrapper>
			<Link to="/search">
				<i className="fas fa-search"></i>
			</Link>
		</SearchWrapper>
	);
};

export default SearchIcon;
