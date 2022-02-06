import { createSlice } from '@reduxjs/toolkit';

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    // subreddit: 'nasa',
    searchTerm: '',
  },
  reducers: {
    // updateSubreddit(state, action)
  }
});

export default navSlice.reducer;
