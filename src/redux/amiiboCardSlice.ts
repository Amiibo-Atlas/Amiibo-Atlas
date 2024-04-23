import { createSlice } from '@reduxjs/toolkit';

export const amiiboCardSlice = createSlice({
    name: 'amiiboCard',
    initialState: { amiibos: [] },
    reducers: {
        settingAmiibo: (state, action) => {
            state.amiibos = action.payload;
        },
    },
});

export const { settingAmiibo } = amiiboCardSlice.actions;
export const amiiboCardReducer = amiiboCardSlice.reducer;
