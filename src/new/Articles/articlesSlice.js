import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_ROOT = 'https://www.reddit.com';

export const loadArticles = createAsyncThunk(
  'articles/loadArticles',
  async (subreddit) => {
    const data = await fetch(`${API_ROOT}/r/${subreddit}.json`);
    const json = await data.json();
    return json.data.children.map(article => article.data);
  }
);

export const loadComments = createAsyncThunk(
  'article/comments',
  async (id) => {
    const data = await fetch(`${API_ROOT}/comments/${id}.json`);
    const json = await data.json();
    console.log(json[1].data.children);
    return json[1].data.children;
  }
);

export const articlesSlice = createSlice({
  name: 'mainBody',
  initialState: {
    subreddit: '240sx',
    articles: [],
    articleId: '',
    comments: [],
    isLoading: false,
    failedToLoad: false
  },
  reducers: {
    updateSubreddit(state, action) {
      state.subreddit = action.payload
    },
    updateArticleID(state, action) {
      state.articleId = action.payload
    },
    clearComments(state, action) {
      state.comments = [];
    }
  },
  extraReducers: {
    // All Articles
    [loadArticles.pending]: (state, action) => {
      state.isLoading = true;
      state.failedToLoad = false;
    },
    [loadArticles.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.failedToLoad = false;
      state.articles = action.payload;
      state.searchedArticles = action.payload;
    },
    [loadArticles.rejected]: (state, action) => {
      state.isLoading = false;
      state.failedToLoad = true;
    },
    // Comments
    [loadComments.pending]: (state, action) => {
      state.isLoading = true;
      state.failedToLoad = false;
    },
    [loadComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.failedToLoad = false;
      state.comments = [];
      state.comments = action.payload;
    },
    [loadComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.failedToLoad = true;
    },
  },
});

export const { updateSubreddit, updateArticleID, clearComments } = articlesSlice.actions;
export const selectSubreddit = (state) => state.mainBody.subreddit;
export const selectArticles = (state) => state.mainBody.articles;
export const selectArticleId = (state) => state.mainBody.articleId;
export const selectComments = (state) => state.mainBody.comments;
export const isLoading = (state) => state.mainBody.isLoading;
export default articlesSlice.reducer;
