import { createSlice } from '@reduxjs/toolkit';

export const allAmiiboSlice = createSlice({
    name: 'allAmiibo',
    initialState: { amiibos: [] },
    reducers: {
        getAmiibo: (state, action) => {
            // state.amiibos = action.payload;
            state.amiibos = action.payload.map((amiibo) => ({
                ...amiibo,
                id: amiibo.id,
            }));
        },
    },
});

export const { getAmiibo: getAmiibo } = allAmiiboSlice.actions;
export const allAmiiboSliceReducer = allAmiiboSlice.reducer;
