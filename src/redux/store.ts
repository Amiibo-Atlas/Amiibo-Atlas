import { configureStore } from '@reduxjs/toolkit';
import { allAmiiboSliceReducer } from '../features/amiibo/getAllAmiibo';
import userReducer from '../features/user/userSlice';

//
export const store = configureStore({
    reducer: {
        user: userReducer,
        allAmiiboSlice: allAmiiboSliceReducer,
    },
});

store.subscribe(() => {
    console.log('store: ', store.getState());
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
