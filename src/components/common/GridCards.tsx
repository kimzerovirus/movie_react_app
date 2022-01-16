import React from 'react';
import { Link } from 'react-router-dom';

//style
import { GridCard } from './GridCards.style';

interface PropsState {
	movieId: number;
	image: string | null;
	movieName: string;
}

const GridCards = (props: PropsState) => {
	if (props.image !== null) {
		return (
			<GridCard>
				{/* <Link to={`${process.env.PUBLIC_URL}/movie/${props.movieId}`} > */}
				<Link to={`/movie/${props.movieId}`}>
					<img
						className="grid-img-size"
						src={props.image}
						alt={props.movieName}
					/>
				</Link>
				{/* </Link> */}
			</GridCard>
		);
	} else {
		return <div></div>;
	}
};

export default GridCards;
