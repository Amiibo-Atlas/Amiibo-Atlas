import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Amiibo } from '../interfaces/amiiboInterface';

interface UserGlobalState {
    email: string | null;
    wishlist: Amiibo[];
    username: string | null;
    loginStatus: boolean;
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        wishlist: [],
        username: null,
        loginStatus: false,
    } as UserGlobalState,
    reducers: {
        setUser: (
            state,
            action: PayloadAction<{
                email: string | null;
                wishlist: Amiibo[];
                username: string | null;
                loginStatus: boolean;
            }>
        ) => {
            const { email, wishlist, username, loginStatus } = action.payload;
            state.email = email;
            state.wishlist = wishlist;
            state.username = username;
            state.loginStatus = loginStatus;
        },
        addAmiiboWishlist: (state, action: PayloadAction<Amiibo>) => {
            state.wishlist.push(action.payload);
        },
        removeAmiiboWishlist: (state, action: PayloadAction<Amiibo>) => {
            const amiiboRemove = action.payload;
            state.wishlist = state.wishlist.filter((figure) => figure !== amiiboRemove);
        },
        updateLoginStatus: (state, action: PayloadAction<boolean>) => {
            state.loginStatus = action.payload;
        },
        updateUsername: (state, action: PayloadAction<string | null>) => {
            state.username = action.payload;
        },
    },
});

export const {
    setUser,
    addAmiiboWishlist,
    removeAmiiboWishlist,
    updateLoginStatus,
    updateUsername,
} = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
