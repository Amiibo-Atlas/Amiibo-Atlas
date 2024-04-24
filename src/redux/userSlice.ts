import { createSlice } from '@reduxjs/toolkit';
import { Amiibo } from '../interfaces/amiiboInterface';

export const userSlice = createSlice({
    name: 'user',
    initialState: { email: null, wishlist: [] },
    reducers: {
        setUser: (state, action) => {
            const { email, wishlist } = action.payload;
            state.email = email;
            state.wishlist = wishlist;
        },
        addAmiiboWishlist: (state, action) => {
            const amiiboAdd = action.payload;
            state.wishlist.push(amiiboAdd as Amiibo);
        },
        removeAmiiboWishlist: (state, action) => {
            const amiiboRemove = action.payload;
            state.wishlist = state.wishlist.filter((figure) => {
                const amiiboId = `${figure.amiiboSeries}-${figure.character}-${figure.gameSeries}`;
                return amiiboId !== amiiboRemove;
            });
        },
    },
});

export const { setUser, addAmiiboWishlist, removeAmiiboWishlist } = userSlice.actions;
export const userSliceReducer = userSlice.reducer;
