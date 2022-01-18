import React, { useEffect, useState, useRef } from 'react';
import { IMAGE_BASE_URL, fetchList } from '../../api';

//components
import GridCards from '../common/GridCards';
import MainMovieImage from '../common/MainMovieImage';
import SearchIcon from '../common/SearchIcon';
import Spinner from '../common/Spinner';

//style
import { Wrapper, GridList } from './MainPage.style';

//types
import { TmdbItems } from '../../api';
interface IState {
	imagePath: string;
	title: string;
	overview: string;
}

const MainPage = () => {
	const [target, setTarget] = useState<HTMLDivElement | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [Movies, setMovies] = useState<TmdbItems[]>([]);
	const [MainImage, setMainImage] = useState<IState>({} as IState);
	const [CurrentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		// console.log(CurrentPage);
		getMovies();

		if (window.localStorage.searchItem) {
			window.localStorage.removeItem('searchItem');
		}
	}, [CurrentPage]);

	useEffect(() => {
		if (target) {
			observerTrigger.observe(target);
			// console.log(Movies.length);
			return () => {
				observerTrigger.unobserve(target);
			};
		}
	}, [target]);

	//TMDB api_call
	// const getMovies = async (cpage?: number) => {
	// 	if (!cpage || cpage < 1) cpage = 1;
	const getMovies = async () => {
		setIsLoading(true);
		try {
			const {
				data: { page, results },
			} = await fetchList(CurrentPage);
			// console.log('page' + page, results);
			setMovies([...Movies, ...results]);
			if (CurrentPage === 1) {
				setMainImage({
					imagePath: results[0].backdrop_path,
					title: results[0].original_title,
					overview: results[0].overview,
				});
			}
		} catch (err) {
			//Error
			alert(`API_CALL_ERROR: ${err}`);
		} finally {
			setIsLoading(false);
		}
	};

	//Button Event
	// const loadMore = () => {
	// 	getMovies(CurrentPage + 1);
	// };

	const observerTrigger = new IntersectionObserver(
		(entries: IntersectionObserverEntry[]) => {
			if (entries[0].isIntersecting) {
				// console.log('trigger');
				setCurrentPage(page => page + 1);
			}
		},
	);
	return (
		<Wrapper>
			<MainMovieImage
				image={`${IMAGE_BASE_URL}w1280${MainImage.imagePath}`}
				title={MainImage.title}
				text={MainImage.overview}
			/>

			<GridList className="container">
				{Movies &&
					Movies.map((movie, index) => (
						<GridCards
							key={index}
							image={
								movie.poster_path
									? `${IMAGE_BASE_URL}w500${movie.poster_path}`
									: null
							}
							movieId={movie.id}
							movieName={movie.original_title}
						/>
					))}
			</GridList>
			<SearchIcon />

			{/* <footer className="center">
				<button onClick={loadMore} className="btn">
					더 보기
				</button>
			</footer> */}
			{/* 관찰대상 */}
			<div ref={setTarget}>
				<Spinner />
			</div>
		</Wrapper>
	);
};

export default MainPage;
