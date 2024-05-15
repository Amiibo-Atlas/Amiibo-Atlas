import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedAmiibo: null
}

const amiiboSlice = createSlice({
    name: 'amiibo',
    initialState,
    reducers: {
        setSelectedAmiibo: (state, action) => {
            state.selectedAmiibo = action.payload;
        },
    },
});

export const { setSelectedAmiibo } = amiiboSlice.actions;
export default amiiboSlice.reducer;