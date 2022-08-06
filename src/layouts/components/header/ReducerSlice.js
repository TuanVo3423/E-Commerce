import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    title: 'Home',
};
export const headerReducer = createSlice({
    name: 'header',
    initialState,
    reducers: {
        reset: () => initialState,
        switchTab: (state, action) => {
            state.title = action.payload;
        },
    },
});
