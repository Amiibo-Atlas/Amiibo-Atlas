import { configureStore } from '@reduxjs/toolkit';
import { allAmiiboSliceReducer } from '../features/amiibo/getAllAmiibo';
import userReducer from '../features/user/userSlice';
import amiiboReducer from '../features/amiibo/amiiboSlice';

//
export const store = configureStore({
    reducer: {
        user: userReducer,
        amiibo: amiiboReducer,
        allAmiiboSlice: allAmiiboSliceReducer,
    },
});

store.subscribe(() => {
    console.log('store: ', store.getState());
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
