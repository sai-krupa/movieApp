import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { moviesReducer } from '../features/movies/moviesSlice';
import { reviewsReducer } from '../features/reviews/reviewsSlice';
import { userReducer } from '../features/user/userSlice';
import { watchMoviesReducer } from '../features/watchMovies/watchMoviesSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    reviews: reviewsReducer,
    user: userReducer,
    watchMovies: watchMoviesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
