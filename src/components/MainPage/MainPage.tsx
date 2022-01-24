import React, { useEffect, useState, useRef } from 'react';
import { IMAGE_BASE_URL, fetchList } from '../../api';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { addMovieAsync, setCpage, setCscroll } from '../../features/movieSlice';

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
	const movieSelector = useSelector((state: RootState) => state.movies);
	const dispatch = useDispatch();

	const [target, setTarget] = useState<HTMLDivElement | null>(null);
	const [isStart, setIsStart] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [Movies, setMovies] = useState<TmdbItems[]>([]);
	const [MainImage, setMainImage] = useState<IState>({} as IState);
	const [CurrentPage, setCurrentPage] = useState(movieSelector.cpage);

	useEffect(() => {
		if (target) {
			observerTrigger.observe(target);
			// console.log(Movies.length);

			return () => {
				observerTrigger.unobserve(target);
			};
		}
	}, [target]);

	useEffect(() => {
		if (isStart && CurrentPage === 1 && movieSelector.movieData.length === 0) {
			//처음 페이지 진입
			// console.log(CurrentPage, 'start');
			dispatch(addMovieAsync(1));
			dispatch(setCpage(1));
			setIsStart(false);
		} else if (isStart) {
			//페이지 진입하였으나 스토어에 데이터가 있는 상태
			// console.log(CurrentPage, 'second');

			if (window.localStorage.searchItem) {
				window.localStorage.removeItem('searchItem');
			}
			setIsStart(false);
		} else if (CurrentPage > 1) {
			//페이지 추가 호출
			// console.log(CurrentPage, 'add');

			dispatch(addMovieAsync(CurrentPage));
			dispatch(setCpage(CurrentPage));
		}
		// setMovies(movieSelector.movieData);
		// if (!MainImage) {
		// 	setMainImage({
		// 		imagePath: movieSelector.movieData[0].backdrop_path,
		// 		title: movieSelector.movieData[0].original_title,
		// 		overview: movieSelector.movieData[0].overview,
		// 	});
		// }
	}, [CurrentPage]);

	const observerTrigger = new IntersectionObserver(
		(entries: IntersectionObserverEntry[]) => {
			if (entries[0].isIntersecting) {
				if (entries[0].intersectionRatio > 0) {
					//target 교차 횟수로 비교하는듯?
					// console.log('trigger');
					setCurrentPage(page => page + 1);
				}
			}
		},
	);
	return (
		<Wrapper>
			<MainMovieImage
				image={
					movieSelector.mainMovieData.image
						? `${IMAGE_BASE_URL}w1280${movieSelector.mainMovieData.image}`
						: null
				}
				title={movieSelector.mainMovieData.title}
				text={movieSelector.mainMovieData.text}
			/>

			<GridList className="container">
				{movieSelector.movieData.map((movie, index) => (
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

			{/* 관찰대상 */}
			<div ref={setTarget}>
				<Spinner />
			</div>
		</Wrapper>
	);
};

export default MainPage;
