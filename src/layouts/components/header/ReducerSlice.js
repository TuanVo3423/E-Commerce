import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    isCloseCart: true,
};
export const headerReducer = createSlice({
    name: 'header',
    initialState,
    reducers: {
        reset: () => initialState,
        VisibleCart: (state, action) => {
            state.isCloseCart = action.payload;
        },
        HiddenModal: (state, action) => {
            state.isCloseCart = action.payload;
        },
    },
});
