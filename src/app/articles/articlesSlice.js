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
    // console.log('Article', json.data.children[0].data);
    return json.data.children[0].data;
  }
);

export const articlesSlice = createSlice({
  name: 'main',
  initialState: {
    articles: [],
    searchedArticles: [],
    article:{
      id: '',
      data: {},
    },
    subredditLogos: {},
    subredditTitle: 'funny',
    isLoadingPreviews: false,
    failedToLoadPreviews: false,
  },
  reducers: {
    removeArticle(state) {
      state.main.article.data = {};
    },
    searchArticles(state, action) {
      state.searchedArticles = action.payload;
    }
  },
  extraReducers: {
    // All Articles
    [loadArticles.pending]: (state, action) => {
      state.isLoadingPreviews = true;
      state.failedToLoadPreviews = false;
    },
    [loadArticles.fulfilled]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = false;
      state.articles = action.payload;
      state.searchedArticles = action.payload;
    },
    [loadArticles.rejected]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = true;
    },
    // One Article
    [loadArticle.pending]: (state, action) => {
      state.isLoadingPreviews = true;
      state.failedToLoadPreviews = false;
    },
    [loadArticle.fulfilled]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = false;
      state.article.id = action.payload.id;
      state.article.data = action.payload;
    },
    [loadArticle.rejected]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = true;
    },
  },
});

export const { removeArticle, searchArticles } = articlesSlice.actions;
export const selectArticles = (state) => state.main.articles;
export const selectSearchedArticles = (state) => state.main.searchedArticles;
export const selectArticle = (state) => state.main.article;
export const selectSubreddit = (state) => state.main.subredditTitle;
export const isLoading = (state) => state.main.isLoadingPreviews;
export default articlesSlice.reducer;
