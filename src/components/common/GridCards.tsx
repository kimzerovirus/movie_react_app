import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Spinner from './Spinner';

//style
import { GridCard } from './GridCards.style';

interface PropsState {
	movieId: number;
	image: string | null;
	movieName: string;
}

const GridCards = (props: PropsState) => {
	const [isLoading, setIsLoading] = useState(false);

	const imgRef = useRef<HTMLImageElement>(null);
	const observer = useRef<IntersectionObserver>();

	useEffect(() => {
		observer.current = new IntersectionObserver(intersectionOberserver);
		imgRef.current && observer.current.observe(imgRef.current); // 관찰 시작
	}, []);

	const intersectionOberserver = (
		entries: IntersectionObserverEntry[],
		io: IntersectionObserver,
	) => {
		entries.forEach(entry => {
			// 이미지 등장
			if (entry.isIntersecting) {
				// console.log(props.image);
				io.unobserve(entry.target); // 관찰 종료
				setIsLoading(true); // 로딩 종료
			}
		});
	};

	if (props.image !== null) {
		return (
			<GridCard>
				{/* <Link to={`${process.env.PUBLIC_URL}/movie/${props.movieId}`} > */}
				<Link to={`/movie/${props.movieId}`}>
					<img
						src={props.image}
						alt={props.movieName}
						ref={imgRef}
						style={isLoading ? { display: 'block' } : { display: 'hidden' }}
					/>
					{isLoading ? <></> : <Spinner />}
				</Link>
				{/* </Link> */}
			</GridCard>
		);
	} else {
		return <div></div>;
	}
};

export default GridCards;
