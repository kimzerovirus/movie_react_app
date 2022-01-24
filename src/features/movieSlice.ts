import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchList } from '../api';

//types
import { TmdbItems } from '../api';
import { MainMovieState } from '../components/common/MainMovieImage';

interface SerializedError {
	name?: string;
	message?: string;
	code?: string;
	stack?: string;
}

interface MovieState {
	movieData: TmdbItems[];
	mainMovieData: MainMovieState;
	cpage: number;
	cscroll: number;
	status: 'idle' | 'loading' | 'failed';
	error: SerializedError | null;
}

const initialState: MovieState = {
	// movieData: {} as TmdbList,
	movieData: [],
	mainMovieData: {} as MainMovieState,
	cpage: 1,
	cscroll: 0, //현재 스크롤 위치
	status: 'idle',
	error: null,
};

export const addMovieAsync = createAsyncThunk(
	'movie/addMovieAsync',
	async (cpage: number, { rejectWithValue }) => {
		try {
			const { data } = await fetchList(cpage);
			return data;
		} catch (e) {
			return rejectWithValue(e);
		}
	},
);

export const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		setCpage: (state, action: PayloadAction<number>) => {
			state.cpage = action.payload;
		},
		setCscroll: (state, action: PayloadAction<number>) => {
			state.cscroll = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(addMovieAsync.pending, state => {
				state.status = 'loading';
			})
			.addCase(addMovieAsync.fulfilled, (state, action) => {
				state.status = 'idle';
				const { page, results } = action.payload;
				// console.log(results);
				state.movieData.push(...results);
				state.mainMovieData = {
					title: state.movieData[0].original_title,
					text: state.movieData[0].overview,
					image: state.movieData[0].backdrop_path,
				};
			})
			.addCase(addMovieAsync.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error;
			});
	},
});

export const { setCpage, setCscroll } = moviesSlice.actions;

export default moviesSlice.reducer;
