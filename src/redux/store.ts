import { configureStore } from '@reduxjs/toolkit';
import { allAmiiboSliceReducer } from './getAllAmiibo';

export const store = configureStore({
    reducer: {
        allAmiiboSlice: allAmiiboSliceReducer,
    },
});

store.subscribe(() => {
    console.log('store: ', store.getState());
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
