import { headerReducer } from '../layouts/components/header/ReducerSlice';
const { configureStore } = require('@reduxjs/toolkit');
const store = configureStore({
    reducer: {
        header: headerReducer.reducer,
    },
});
export default store;
