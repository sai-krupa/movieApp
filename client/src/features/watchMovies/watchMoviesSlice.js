import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  watchArray: [],
};

const watchMoviesSlice = createSlice({
  name: 'watchMovies',
  initialState,
  reducers: {
    addWatchMovies: (state, action) => {
      if (state.watchArray.find((movie) => movie.id === action.payload.id)) {
        return;
      }
      state.watchArray = [...state.watchArray, action.payload];
    },
    deleteWatchMovies: (state, action) => {
      state.watchArray = state.watchArray.filter(
        (movie) => movie.id !== action.payload.id
      );
      console.log(state.watchArray);
    },
  },
});

export const { addWatchMovies, deleteWatchMovies } = watchMoviesSlice.actions;

export const watchMoviesReducer = watchMoviesSlice.reducer;

export const selectAllWatchMovies = (state) => {
  return state.watchMovies.watchArray;
};
