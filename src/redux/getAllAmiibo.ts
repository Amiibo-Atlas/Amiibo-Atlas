import { createSlice } from '@reduxjs/toolkit';

export const allAmiiboSlice = createSlice({
    name: 'allAmiibo',
    initialState: { amiibos: [] },
    reducers: {
        getAmiibo: (state, action) => {
            state.amiibos = action.payload;
        },
    },
});

export const { getAmiibo: getAmiibo } = allAmiiboSlice.actions;
export const allAmiiboSliceReducer = allAmiiboSlice.reducer;
