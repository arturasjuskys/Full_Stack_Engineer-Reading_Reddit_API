import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadAllSubreddits = createAsyncThunk(
  'asidePreview/loadSubreddits',
  async () => {
    const data = await fetch('/subreddits.json');
    const json = await data.json();
    // console.log('subreddit json: ', json);
    return json;
  }
);

export const asidePreviewSlice = createSlice({
  name: 'asidePreviews',
  initialState: {
    subreddits: [],
    isLoadingSubreddits: false,
    failedToLoadSubreddits: false,
  },
  extraReducers: {
    [loadAllSubreddits.pending]: (state, action) => {
      state.isLoadingSubreddits = true;
    },
    [loadAllSubreddits.fulfilled]: (state, action) => {
      state.isLoadingSubreddits = false;
      state.subreddits = action.payload;
    },
    [loadAllSubreddits.rejected]: (state, action) => {
      state.failedToLoadSubreddits = true;
    },
  }
});

export const isLoadingSubreddits = (state) => state.isLoadingSubreddits;
export const selectAllSubreddits = (state) => state.asidePreviews.subreddits;
export default asidePreviewSlice.reducer;
