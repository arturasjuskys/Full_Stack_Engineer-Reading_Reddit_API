import { createSlice } from "@reduxjs/toolkit";

export const asidePreviewSlice = createSlice({
  name: 'asidePreviews',
  initialState: {
    isLoadingSubreddits: false,
    failedToLoadSubreddits: false,
  },
});

export const isLoadingSubreddits = (state) => state.isLoadingSubreddits;
export default asidePreviewSlice.reducer;
