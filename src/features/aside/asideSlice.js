import { createSlice } from "@reduxjs/toolkit";

export const asideSlice = createSlice({
  name: 'aside',
  initialState: {
    isLoadingSubreddits: false,
    failedToLoadSubreddits: false,
    subreddits: [
      {
        title: 'Home',
        id: 1,
        icon: '',
      },
      {
        title: 'memes',
        id: 2,
        icon: '',
      },
      {
        title: 'funny',
        id: 3,
        icon: '',
      },
      {
        title: 'gaming',
        id: 4,
        icon: '',
      },
    ],
  },
});

export const isLoadingSubreddits = (state) => state.aside.isLoadingSubreddits;
export const selectAllSubreddits = (state) => state.aside.subreddits;
export default asideSlice.reducer;
