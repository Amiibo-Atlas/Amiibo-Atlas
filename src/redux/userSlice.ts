import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Amiibo } from '../interfaces/amiiboInterface';

interface UserGlobalState {
    email: string | null;
    wishlist: Amiibo[]; // Ensure wishlist is an array of Amiibo objects
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
            // const amiiboAdd = action.payload;
            // state.wishlist.push(amiiboAdd as Amiibo);
            //
            state.wishlist.push(action.payload);
        },
        removeAmiiboWishlist: (state, action: PayloadAction<Amiibo>) => {
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
