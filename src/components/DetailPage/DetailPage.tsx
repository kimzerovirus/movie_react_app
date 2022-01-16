import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

//components
import MainMovieImage from '../common/MainMovieImage';
import DetailData from './DetailData';

//api
import { IMAGE_BASE_URL, fetchById } from '../../api';

//type
import { TmdbMovieInfo } from '../../api';

const DetailPage = () => {
	const navigate = useNavigate();
	const { movieId } = useParams() as { movieId: string }; // string | undefined

	const [Movie, setMovie] = useState<TmdbMovieInfo>({} as TmdbMovieInfo);

	useEffect(() => {
		getMovies(movieId);
	}, []);

	const getMovies = async (id: string) => {
		try {
			const { data } = await fetchById(id);
			setMovie(data);
		} catch (err) {
			alert(`api_call_error: ${err}`);
			return false;
		}
	};

	const goBack = () => {
		// props.history.goBack();
		navigate(-1);
	};

	return (
		<div className="wrap">
			<MainMovieImage
				image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
				title={Movie.original_title}
				text={Movie.overview}
			/>

			<DetailData data={Movie} />

			<div className="search-icon" onClick={goBack}>
				<a>
					<img src={`${process.env.PUBLIC_URL}/search_back.svg`} alt="" />
				</a>
			</div>
		</div>
	);
};

export default DetailPage;
