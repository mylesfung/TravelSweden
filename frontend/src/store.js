// configureStore for react-redux
import { configureStore } from '@reduxjs/toolkit';
import myReviewsReducer from './features/myReviewsSlice';

export const store = configureStore({
    reducer: {
        myReviews: myReviewsReducer
    }
})