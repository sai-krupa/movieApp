// import { COMMENTS } from '../../app/shared/COMMENTS';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';

export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async () => {
    const response = await fetch(baseUrl + 'reviews');
    if (!response.ok) {
      return Promise.reject('Unable to fetch, status:' + response.status);
    }
    const data = await response.json();
    return data;
  }
);

export const postReview = createAsyncThunk(
  'reviews/postReview',
  async (review, { dispatch }) => {
    const response = await fetch(baseUrl + 'reviews', {
      method: 'POST',
      body: JSON.stringify(review),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      return Promise.reject(response.status);
    }
    const data = await response.json();
    dispatch(addReview(data));
  }
);

const initialState = {
  reviewsArray: [],
  isLoading: true,
  errMsg: '',
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    addReview: (state, action) => {
      console.log('addReview: action.payload', action.payload);
      console.log('addReview: state.reviewsArray', state.reviewsArray);
      const newReview = {
        id: state.reviewsArray.length + 1,
        ...action.payload,
      };
      state.reviewsArray.push(newReview);
    },
  },
  extraReducers: {
    [fetchReviews.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchReviews.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = '';
      state.reviewsArray = action.payload;
    },
    [fetchReviews.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : 'Fetch failed';
    },
    [postReview.rejected]: (state, action) => {
      alert(
        'Your review could not be posted\nError: ' +
          (action.error ? action.error.message : 'Fetch failed')
      );
    },
  },
});

export const reviewsReducer = reviewsSlice.reducer;

export const { addReview } = reviewsSlice.actions;

export const selectReviewsByCampsiteId = (movieId) => (state) => {
  return state.reviews.reviewsArray.filter(
    (review) => review.movieId === parseInt(movieId)
  );
};
