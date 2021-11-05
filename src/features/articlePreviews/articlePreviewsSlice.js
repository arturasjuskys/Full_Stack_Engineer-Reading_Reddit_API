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

export const loadFromHome = createAsyncThunk(
  'articlePreviews/loadFromReddit',
  async () => {
    const data = await fetch(`${API_ROOT}/r/Home.json`);
    const json = await data.json();
    return json.data.children.map((article) => article.data);
  }
);

export const loadFromMemes = createAsyncThunk(
  'articlePreviews/loadFromMemes',
  async () => {
    const data = await fetch(`${API_ROOT}/r/memes.json`);
    const json = await data.json();
    return json.data.children.map((article) => article.data);
  }
);

export const loadFromFunny = createAsyncThunk(
  'articlePreviews/loadFromFunny',
  async () => {
    const data = await fetch(`${API_ROOT}/r/funny.json`);
    const json = await data.json();
    return json.data.children.map((article) => article.data);
  }
);

export const loadFromGaming = createAsyncThunk(
  'articlePreviews/loadFromGaming',
  async () => {
    const data = await fetch(`${API_ROOT}/r/gaming.json`);
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
    [loadFromFunny.pending]: (state, action) => {
      state.isLoadingPreviews = true;
      state.failedToLoadPreviews = false;
    },
    [loadFromFunny.fulfilled]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = false;
      state.articlesFromReddit = action.payload;
    },
    [loadFromFunny.rejected]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = true;
    },
    [loadFromGaming.pending]: (state, action) => {
      state.isLoadingPreviews = true;
      state.failedToLoadPreviews = false;
    },
    [loadFromGaming.fulfilled]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = false;
      state.articlesFromReddit = action.payload;
    },
    [loadFromGaming.rejected]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = true;
    },
    [loadFromHome.pending]: (state, action) => {
      state.isLoadingPreviews = true;
      state.failedToLoadPreviews = false;
    },
    [loadFromHome.fulfilled]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = false;
      state.articlesFromReddit = action.payload;
    },
    [loadFromHome.rejected]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = true;
    },
  }
});

export const selectAllPreviews = (state) => state.articlePreviews.articles;
export const selectFromReddit = (state) => state.articlePreviews.articlesFromReddit;
export const isLoading = (state) => state.isLoadingPreviews;
export default articlePreviewsSlice.reducer;
