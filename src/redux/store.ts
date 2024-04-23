import { configureStore } from '@reduxjs/toolkit';
import { recentAmiiboReducer } from './recentAmiiboSlice';

export const store = configureStore({
    reducer: {
        recentAmiiboCard: recentAmiiboReducer,
    },
});

store.subscribe(() => {
    console.log('store: ', store.getState());
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
