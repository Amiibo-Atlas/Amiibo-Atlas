import { configureStore } from '@reduxjs/toolkit';
import { amiiboCardReducer } from './amiiboCardSlice';

export const store = configureStore({
    reducer: {
        amiiboCard: amiiboCardReducer,
    },
});

store.subscribe(() => {
    console.log('store: ', store.getState());
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
