import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await fetch(baseUrl + 'movies');
  if (!response.ok) {
    return Promise.reject('Unable to fetch, status:' + response.status);
  }
  const data = await response.json();
  return data;
});

const initialState = {
  moviesArray: [],
  isLoading: true,
  errMsg: '',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = '';
      state.moviesArray = mapImageURL(action.payload);
    },
    [fetchMovies.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : 'Fetch failed';
    },
  },
});

export const moviesReducer = moviesSlice.reducer;

export const selectAllMovies = (state) => {
  return state.movies.moviesArray;
};

export const selectMovieById = (id) => (state) => {
  return state.movies.moviesArray.find((movie) => movie.id === parseInt(id));
};

// export const showMovieGenre = (id) => (state) => {
//   return state.movies.genre.map((movie) => movie.name);
// };
