import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const API_ROOT = 'https://www.reddit.com';

export const loadAllPreviews = createAsyncThunk(
  'articlePreviews/loadAllPreviews',
  async () => {
    const data = await fetch('/articles.json');
    const json = await data.json();
    return json;
  }
);

export const loadFromMemes = createAsyncThunk(
  'articlePreviews/loadfromReddit',
  async () => {
    const data = await fetch(`${API_ROOT}/r/memes.json`);
    const json = await data.json();
    return json.data.children.map((article) => article.data);
  }
);

export const articlePreviewsSlice = createSlice({
  name: 'articlePreviews',
  initialState: {
    articles: [],
    articlesFromReddit: [],
    isLoadingPreviews: false,
    failedToLoadPreviews: false,
  },
  extraReducers: {
    [loadAllPreviews.pending]: (state, action) => {
      state.isLoadingPreviews = true;
      state.failedToLoadPreviews = false;
    },
    [loadAllPreviews.fulfilled]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = false;
      state.articles = action.payload;
    },
    [loadAllPreviews.rejected]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = true;
    },
    [loadFromMemes.pending]: (state, action) => {
      state.isLoadingPreviews = true;
      state.failedToLoadPreviews = false;
    },
    [loadFromMemes.fulfilled]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = false;
      state.articlesFromReddit = action.payload;
    },
    [loadFromMemes.rejected]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = true;
    },
  }
});

export const selectAllPreviews = (state) => state.articlePreviews.articles;
export const selectFromReddit = (state) => state.articlePreviews.articlesFromReddit;
export const isLoading = (state) => state.isLoadingPreviews;
export default articlePreviewsSlice.reducer;
