import { createSlice } from "@reduxjs/toolkit";

export const asideSlice = createSlice({
  name: 'aside',
  initialState: {
    isLoadingSubreddits: false,
    failedToLoadSubreddits: false,
    subreddit: '',
    subreddits: [
      {
        title: 'Home',
        icon: '',
      },
      {
        title: 'memes',
        icon: '',
      },
      {
        title: 'funny',
        icon: '',
      },
      {
        title: 'gaming',
        icon: '',
      },
    ],
  },
  reducers: {
    updateSubreddit(state, action) {
      state.subreddit = action.payload;
    },
  }
});

export const { updateSubreddit } = asideSlice.actions;
export const isLoadingSubreddits = (state) => state.aside.isLoadingSubreddits;
export const selectAllSubreddits = (state) => state.aside.subreddits;
export default asideSlice.reducer;
