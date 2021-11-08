import { createSlice } from "@reduxjs/toolkit";

export const asideSlice = createSlice({
  name: 'asidePreviews',
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

export const isLoadingSubreddits = (state) => state.asidePreviews.isLoadingSubreddits;
export const selectAllSubreddits = (state) => state.asidePreviews.subreddits;
export default asideSlice.reducer;
