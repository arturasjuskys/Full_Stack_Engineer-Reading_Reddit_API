import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const API_ROOT = 'https://www.reddit.com';

export const loadFromSubreddit = createAsyncThunk(
  'articlePreviews/loadFromSubreddit',
  async (subreddit) => {
    const data = await fetch(`${API_ROOT}/r/${subreddit}.json`);
    const json = await data.json();
    return json.data.children.map((article) => article.data);
  }
);

export const articlePreviewsSlice = createSlice({
  name: 'articlePreviews',
  initialState: {
    articles: [],
    articlesFromReddit: [],
    subredditLogos: {},
    subredditTitle: 'funny',
    isLoadingPreviews: false,
    failedToLoadPreviews: false,
  },
  extraReducers: {
    [loadFromSubreddit.pending]: (state, action) => {
      state.isLoadingPreviews = true;
      state.failedToLoadPreviews = false;
    },
    [loadFromSubreddit.fulfilled]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = false;
      state.articlesFromReddit = action.payload;
    },
    [loadFromSubreddit.rejected]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = true;
    },
  }
});

export const selectAllPreviews = (state) => state.articlePreviews.articles;
export const selectFromReddit = (state) => state.articlePreviews.articlesFromReddit;
export const selectSearchTerm = (state) => state.articlePreviews.searchTerm;
export const selectSubredditLogos = (state) => state.articlePreviews.subredditLogos;
export const selectSubredditTitle = (state) => state.articlePreviews.subredditTitle;
export const isLoading = (state) => state.isLoadingPreviews;
export default articlePreviewsSlice.reducer;
