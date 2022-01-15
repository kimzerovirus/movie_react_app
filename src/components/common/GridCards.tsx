import React from 'react';
import { Link } from 'react-router-dom';

const GridCards = (props: any) => {
	if (props.image !== null) {
		return (
			<li className="grid-card">
				{/* <Link to={`${process.env.PUBLIC_URL}/movie/${props.movieId}`} > */}
				<Link to={`/movie/${props.movieId}`}>
					<img
						className="grid-img-size"
						src={props.image}
						alt={props.movieName}
					/>
				</Link>
				{/* </Link> */}
			</li>
		);
	} else {
		return <div></div>;
	}
};

export default GridCards;
