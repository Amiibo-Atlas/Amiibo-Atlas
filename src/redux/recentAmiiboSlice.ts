import { createSlice } from '@reduxjs/toolkit';

export const recentAmiiboSlice = createSlice({
    name: 'amiiboCard',
    initialState: { amiibos: [] },
    reducers: {
        settingRecentAmiibo: (state, action) => {
            state.amiibos = action.payload;
        },
    },
});

export const { settingRecentAmiibo: settingAmiibo } = recentAmiiboSlice.actions;
export const recentAmiiboReducer = recentAmiiboSlice.reducer;
