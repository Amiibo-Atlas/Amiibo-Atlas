import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Amiibo } from '../../types/Amiibo';

interface UserGlobalState {
    email: string | null;
    wishlist: Amiibo[];
    username: string | null;
    loginStatus: boolean;
    uidToken: string | null;
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
        wishlist: [],
        username: null,
        loginStatus: false,
        uidToken: null,
    } as UserGlobalState,
    reducers: {
        setUser: (
            state,
            action: PayloadAction<{
                email: string | null;
                wishlist: Amiibo[];
                username: string | null;
                loginStatus: boolean;
                uidToken: string | null;
            }>
        ) => {
            const { email, wishlist, username, loginStatus, uidToken } = action.payload;
            state.email = email;
            state.wishlist = wishlist;
            state.username = username;
            state.loginStatus = loginStatus;
            state.uidToken = uidToken;
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
        updateUID: (state, action: PayloadAction<string | null>) => {
            state.uidToken = action.payload;
        },
    },
});

export const {
    setUser,
    addAmiiboWishlist,
    removeAmiiboWishlist,
    updateLoginStatus,
    updateUsername,
    updateUID,
} = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
