import { createSlice } from '@reduxjs/toolkit';
 
const myReviewsSlice = createSlice({
    name: 'myReviews',
    initialState: {
        items: []
    },
    reducers: {
        addReview: (state, action) => {
            if (!state.items.find(r => r.id === action.payload.id)) {
                state.items.push(action.payload)
            }
        },
        editReview: (state, action) => {
            if (!state.items.find(r => r.id === action.payload.id)) {
                state.items.push(action.payload)
            }
        },
        removeReview: (state, action) => {
            // reviewId is the action.payload
            state.items = state.items.filter(r => r.id !== action.payload)
        }
    }
})

export const { addReview, editReview, removeReview } = myReviewsSlice.actions
export default myReviewsSlice.reducer;