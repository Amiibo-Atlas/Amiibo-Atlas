import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Amiibo } from '../interfaces/amiiboInterface';

interface UserGlobalState {
    email: string | null;
    wishlist: Amiibo[];
}

export const userSlice = createSlice({
    name: 'user',
    initialState: { email: null, wishlist: [] } as UserGlobalState,
    reducers: {
        setUser: (state, action: PayloadAction<{ email: string | null; wishlist: Amiibo[] }>) => {
            const { email, wishlist } = action.payload;
            state.email = email;
            state.wishlist = wishlist;
        },
        addAmiiboWishlist: (state, action: PayloadAction<Amiibo>) => {
            state.wishlist.push(action.payload);
        },
        removeAmiiboWishlist: (state, action: PayloadAction<Amiibo>) => {
            const amiiboRemove = action.payload;
            state.wishlist = state.wishlist.filter((figure) => figure !== amiiboRemove);
        },
    },
});

export const { setUser, addAmiiboWishlist, removeAmiiboWishlist } = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
