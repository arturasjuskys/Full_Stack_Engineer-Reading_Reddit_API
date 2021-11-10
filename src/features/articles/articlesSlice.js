import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const API_ROOT = 'https://www.reddit.com';

export const loadArticles = createAsyncThunk(
  'articles/loadArticles',
  async (subreddit) => {
    const data = await fetch(`${API_ROOT}/r/${subreddit}.json`);
    const json = await data.json();
    return json.data.children.map((article) => article.data);
  }
);

export const loadArticle = createAsyncThunk(
  'article/loadArticle',
  async (id) => {
    const data = await fetch(`https://api.reddit.com/api/info/?id=t3_${id}`);
    const json = await data.json();
    console.log(json);
    return json;
  }
);

export const articlesSlice = createSlice({
  name: 'main',
  initialState: {
    articles: [],
    article:{
      id: '',
      data: {},
    },
    subredditLogos: {},
    subredditTitle: 'funny',
    isLoadingPreviews: false,
    failedToLoadPreviews: false,
  },
  extraReducers: {
    [loadArticles.pending]: (state, action) => {
      state.isLoadingPreviews = true;
      state.failedToLoadPreviews = false;
    },
    [loadArticles.fulfilled]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = false;
      state.articles = action.payload;
    },
    [loadArticles.rejected]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = true;
    },
  }
});

export const selectAllArticles = (state) => state.main.articles;
export const selectSearchTerm = (state) => state.articles.searchTerm;
export const selectSubredditTitle = (state) => state.main.subredditTitle;
export const isLoading = (state) => state.main.isLoadingPreviews;
export default articlesSlice.reducer;
