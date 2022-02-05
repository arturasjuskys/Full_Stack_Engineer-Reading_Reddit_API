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
    return json.data.children[0].data;
  }
);

export const loadComments = createAsyncThunk(
  'article/loadComments',
  async (id) => {
    const data = await fetch(`https://www.reddit.com/comments/${id}.json`);
    const json = await data.json();
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
      comments: {},
    },
    subredditLogos: {},
    subreddit: 'funny',
    isLoadingPreviews: false,
    failedToLoadPreviews: false,
  },
  reducers: {
    updateSubreddit(state, action) {
      state.subreddit = action.payload;
    },
    clearArticle(state, action) {
      state.article = {
        id: '',
        comments: {},
      };
    },
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
    // Comments
    [loadComments.pending]: (state, action) => {
      state.isLoadingPreviews = true;
      state.failedToLoadPreviews = false;
    },
    [loadComments.fulfilled]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = false;
      state.article.comments = action.payload;
    },
    [loadComments.rejected]: (state, action) => {
      state.isLoadingPreviews = false;
      state.failedToLoadPreviews = true;
    },
  },
});

export const { updateSubreddit, clearArticle } = articlesSlice.actions;
export const selectArticles = (state) => state.main.articles;
export const selectArticle = (state) => state.main.article;
export const selectComments = (state) => state.main.article.comments;
export const selectSubreddit = (state) => state.main.subreddit;
export const isLoading = (state) => state.main.isLoadingPreviews;
export default articlesSlice.reducer;
