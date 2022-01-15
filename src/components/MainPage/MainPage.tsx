import React, { useEffect, useState } from 'react';
import { IMAGE_BASE_URL, fetchList } from '../../api';

//components
import GridCards from '../common/GridCards';
import MainMovieImage from '../common/MainMovieImage';
import SearchIcon from '../common/SearchIcon';

//types
import { TmdbItems } from '../../api';
interface ISate {
	imagePath: string;
	title: string;
	overview: string;
}

const MainPage = () => {
	const [Movies, setMovies] = useState<TmdbItems[]>([]);
	const [MainImage, setMainImage] = useState<ISate>({
		imagePath: '',
		title: '',
		overview: '',
	});
	const [CurrentPage, setCurrentPage] = useState(0);

	useEffect(() => {
		getMovies(1);

		if (window.localStorage.searchItem) {
			window.localStorage.removeItem('searchItem');
		}
	}, []);

	//TMDB api_call
	const getMovies = async (cpage: number) => {
		try {
			const {
				data: { page, results },
			} = await fetchList(cpage);
			// console.log('page' + page, results);
			setMovies([...Movies, ...results]);
			if (CurrentPage === 0) {
				setMainImage({
					imagePath: results[0].backdrop_path,
					title: results[0].original_title,
					overview: results[0].overview,
				});
			}

			setCurrentPage(page);
		} catch (err) {
			//Error
			alert(`API_CALL_ERROR: ${err}`);
		}
	};

	//Button Event
	const loadMore = () => {
		getMovies(CurrentPage + 1);
	};

	return (
		<div className="wrap">
			<MainMovieImage
				image={`${IMAGE_BASE_URL}w1280${MainImage.imagePath}`}
				title={MainImage.title}
				text={MainImage.overview}
			/>

			<section className="grid-section mt">
				<div className="menu"></div>

				<ul className="grid-list clfix">
					{Movies &&
						Movies.map((movie, index) => (
							<GridCards
								key={index}
								landingPage
								image={
									movie.poster_path
										? `${IMAGE_BASE_URL}w500${movie.poster_path}`
										: null
								}
								movieId={movie.id}
								movieName={movie.original_title}
							/>
						))}
				</ul>
			</section>

			<SearchIcon />

			<footer className="center">
				<button onClick={loadMore} className="btn">
					더 보기
				</button>
			</footer>
		</div>
	);
};

export default MainPage;
