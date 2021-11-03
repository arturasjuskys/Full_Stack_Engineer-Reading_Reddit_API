import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_ROOT } from "../articlePreviews/articlePreviewsSlice";

export const loadSubreddit = (subredditName) => createAsyncThunk(
  'asidePreview/loadSubreddits',
  async () => {
    const data = await fetch(`${API_ROOT}/${subredditName}`);
    const json = await data.json();
    // console.log('subreddit json: ', json);
    return json.data.children.map((article) => article.data);
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
    [loadSubreddit.pending]: (state, action) => {
      state.isLoadingSubreddits = true;
    },
    [loadSubreddit.fulfilled]: (state, action) => {
      state.isLoadingSubreddits = false;
      state.subreddits = action.payload;
    },
    [loadSubreddit.rejected]: (state, action) => {
      state.failedToLoadSubreddits = true;
    },
  }
});

export const isLoadingSubreddits = (state) => state.isLoadingSubreddits;
export const selectAllSubreddits = (state) => state.asidePreviews.subreddits;
export default asidePreviewSlice.reducer;
