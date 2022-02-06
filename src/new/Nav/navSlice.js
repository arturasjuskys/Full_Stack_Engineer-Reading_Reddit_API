import { createSlice } from '@reduxjs/toolkit';

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    searchTerm: '',
  },
  reducers: {
    updateSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { updateSearchTerm } = navSlice.actions;
export const selectSearchTerm = (state) => state.nav.searchTerm;
export default navSlice.reducer;
