import { createSlice } from "@reduxjs/toolkit";

export const asideSlice = createSlice({
  name: 'aside',
  initialState: {
    isLoadingSubreddits: false,
    failedToLoadSubreddits: false,
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
});

export const isLoadingSubreddits = (state) => state.aside.isLoadingSubreddits;
export const selectAllSubreddits = (state) => state.aside.subreddits;
export default asideSlice.reducer;
