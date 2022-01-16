import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

//api
import { fetchByTitle, IMAGE_BASE_URL } from '../../api';

//components
import GridCards from '../common/GridCards';

//style
import { SearchPageWrapper, SearchForm } from './SearchPage.style';
import { GridList } from '../MainPage/MainPage.style';

//types
import { TmdbItems } from '../../api';

const SearchPage = () => {
	const navigate = useNavigate();
	const [SearchItem, setSearchItem] = useState('');
	const [Movie, setMovie] = useState<TmdbItems[]>([]);
	const [SearchResult, setSearchResult] = useState(false);
	//console.log(SearchItem)

	//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false => movie쿼리 필요

	// const URL = `${BASE_URL}search/movie?query=${SearchItem}&api_key=${API_KEY}&language=ko-KR&page=1&include_adult=false`;

	useEffect(() => {
		if (window.localStorage.searchItem) {
			//alert('localstorage_data')
			const output = localStorage.getItem('searchItem') as string;
			getMovies(output);
		}

		if (SearchItem !== '') {
			//console.log('hi')
			getMovies(SearchItem);
		}
	}, []);

	//Set LocalStorage
	const setLocalStorage = () => {
		window.localStorage.setItem('searchItem', SearchItem);
		console.log('setItem');
	};

	//Remove LocalStorage
	const removeLocalStorage = () => {
		window.localStorage.removeItem('searchItem');
		//console.log('removeItem')
	};

	// //Back
	// const goBack = () => {
	// 	navigate(-1);
	// };

	//API_CALL
	const getMovies = async (movieName: string) => {
		try {
			const { data } = await fetchByTitle(movieName);
			setMovie(data.results);

			//스토리지 저장
			if (SearchItem !== '') {
				setLocalStorage();
			}

			setSearchResult(true);
		} catch (err) {
			alert(`api_call_error: ${err}`);
			return false;
		}
	};

	//Input Event
	const onSearchItemHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		//입력시 스토리지 삭제
		if (window.localStorage.searchItem) {
			removeLocalStorage();
			//alert('remove')
		}
		setSearchItem(e.currentTarget.value);
	};

	//Submit Event
	const onSubmitHandler = () => {
		//console.log(URL)
		if (SearchItem === '') {
			alert('검색어를 입력해주세요');
			return false;
		}
		getMovies(SearchItem);
	};

	//Enter Event
	const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			onSubmitHandler();
		}
	};

	// const inputHandler = (e: React.MouseEvent<HTMLInputElement>) => {
	// 	e.currentTarget.value = '';
	// };

	return (
		<SearchPageWrapper>
			<h1>찾는 영화가 있으신가요?</h1>
			<SearchForm>
				<input
					type="text"
					value={SearchItem}
					onChange={onSearchItemHandler}
					// onClick={inputHandler}
					onKeyPress={onKeyPressHandler}
				/>
				<button onClick={onSubmitHandler}>검색</button>
			</SearchForm>
			{SearchResult ? (
				<>
					<GridList className="container">
						{Movie &&
							Movie.map((movie, index) => (
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
					{Movie.length === 0 ? <h2>검색결과가 없습니다.</h2> : null}
				</>
			) : null}
		</SearchPageWrapper>
	);
};

export default SearchPage;
