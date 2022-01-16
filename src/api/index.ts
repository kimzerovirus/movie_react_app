import axios from 'axios';

const API_KEY = '550e09f5c58bb2c7223f308a2417476d';
const BASE_URL = 'https://api.themoviedb.org/3/';

// img url
export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

//type
export interface TmdbItems {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface TmdbList {
	data: {
		page: number;
		results: TmdbItems[];
	};
}

export interface TmdbMovieInfo extends TmdbItems {
	imdb_id: string;
	belongs_to_collection: object;
	budget: number;
	homepage: string;
	production_companies: [];
	revenue: string;
	runtime: number;
	spoken_languages: [];
	status: string;
	tagline: string;
}

export interface TmdbMovieInfos {
	data: TmdbMovieInfo;
}

// list
export const fetchList = (payload: number): Promise<TmdbList> => {
	return axios.get(
		`${BASE_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=${payload}`,
	);
};

// searchById
export const fetchById = (payload: string): Promise<TmdbMovieInfos> => {
	return axios.get(
		`${BASE_URL}movie/${payload}?api_key=${API_KEY}&language=ko-KR`,
	);
};

// searchByTitle
export const fetchByTitle = (payload: string): Promise<TmdbList> => {
	return axios.get(
		`${BASE_URL}search/movie?query=${payload}&api_key=${API_KEY}&language=ko-KR&page=1&include_adult=false`,
	);
};

//https://api.themoviedb.org/3/search/movie?query=hello&api_key=550e09f5c58bb2c7223f308a2417476d&language=ko-KR&page=1&include_adult=false`;
//https://api.themoviedb.org/3/movie/438695?api_key=550e09f5c58bb2c7223f308a2417476d&language=ko-KR
//https://api.themoviedb.org/3/movie/popular?api_key=550e09f5c58bb2c7223f308a2417476d&language=ko-KR&page=1
/*
adult: false
backdrop_path: "/tutaKitJJIaqZPyMz7rxrhb4Yxm.jpg"
genre_ids: (4) [16, 35, 10751, 10402]
id: 438695
original_language: "en"
original_title: "Sing 2"
overview: "대국민 오디션 이후 각자의 자리에서 꿈을 이루고 있는 버스터 문(매튜 맥커너히)과 크루들에게 레드 쇼어 시티에서 전 세계가 주목하는 사상 최고의 쇼가 펼쳐진다는 소식이 들려오고 버스터 문과 크루들은 도전에 나선다. 그러나 최고의 스테이지에 서기 위한 경쟁은 이전과는 비교도 할 수 없을 만큼 치열하고, 버스터 문은 완벽한 라이브를 위해 종적을 감춘 레전드 뮤지션 클레이(보노)를 캐스팅하겠다는 파격 선언을 하는데!"
popularity: 9077.502
poster_path: "/xe8dVB2QiCxLWFV77V4dpZcOvYB.jpg"
release_date: "2021-12-01"
title: "씽2게더"
video: false
vote_average: 8.1
vote_count: 639
{"page":1,"results":[{"adult":false,"backdrop_path":"/2I90eTdWu1yQPXtvuMxGW4kgswP.jpg","genre_ids":[878,10749,16],"id":604605,"original_language":"ja","original_title":"HELLO WORLD","overview":"세계가 발칵 뒤집힐 신기축의 하이스피드 SF청춘 러브스토리가 지금부터 펼쳐진다.","popularity":15.476,"poster_path":"/aZYFkyeolN6Bv7FGSANZkPnaZAQ.jpg","release_date":"2019-09-20","title":"헬로 월드","video":false,"vote_average":7.2,"vote_count":156},
*/
/*
{
	adult: false,
	backdrop_path: '/tutaKitJJIaqZPyMz7rxrhb4Yxm.jpg',
	belongs_to_collection: {
		id: 544670,
		name: '씽 시리즈',
		poster_path: '/h151oRzvsxfKRznEmlQJRlnvsid.jpg',
		backdrop_path: '/z9ft5HYHzWcasR6SGcgeluxTznB.jpg',
	},
	budget: 85000000,
	genres: [
		{ id: 16, name: '애니메이션' },
		{ id: 35, name: '코미디' },
		{ id: 10751, name: '가족' },
		{ id: 10402, name: '음악' },
	],
	homepage: 'https://www.illumination.com/movie/sing-2/',
	id: 438695,
	imdb_id: 'tt6467266',
	original_language: 'en',
	original_title: 'Sing 2',
	overview:
		'대국민 오디션 이후 각자의 자리에서 꿈을 이루고 있는 버스터 문(매튜 맥커너히)과 크루들에게 레드 쇼어 시티에서 전 세계가 주목하는 사상 최고의 쇼가 펼쳐진다는 소식이 들려오고 버스터 문과 크루들은 도전에 나선다. 그러나 최고의 스테이지에 서기 위한 경쟁은 이전과는 비교도 할 수 없을 만큼 치열하고, 버스터 문은 완벽한 라이브를 위해 종적을 감춘 레전드 뮤지션 클레이(보노)를 캐스팅하겠다는 파격 선언을 하는데!',
	popularity: 9077.502,
	poster_path: '/xe8dVB2QiCxLWFV77V4dpZcOvYB.jpg',
	production_companies: [
		{
			id: 6704,
			logo_path: '/fOG2oY4m1YuYTQh4bMqqZkmgOAI.png',
			name: 'Illumination Entertainment',
			origin_country: 'US',
		},
		{
			id: 33,
			logo_path: '/8lvHyhjr8oUKOOy2dKXoALWKdp0.png',
			name: 'Universal Pictures',
			origin_country: 'US',
		},
	],
	production_countries: [
		{ iso_3166_1: 'US', name: 'United States of America' },
	],
	release_date: '2021-12-01',
	revenue: 196000000,
	runtime: 110,
	spoken_languages: [
		{ english_name: 'English', iso_639_1: 'en', name: 'English' },
	],
	status: 'Released',
	tagline: '전 세계가 주목한 스테이지! 함께 도전할 준비됐지?',
	title: '씽2게더',
	video: false,
	vote_average: 8.2,
	vote_count: 686,
};
*/
