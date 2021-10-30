import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadAllPreviews = createAsyncThunk(
  'articlePreviews/loadAllPreviews',
  async () => {
    const data = await fetch('/articles.json');
    const json = await data.json();
    // console.log('json: ', json);
    return json;
  }
);

export const articlePreviewsSlice = createSlice({
  name: 'articlePreviews',
  initialState: {
    articles: [],
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
  }
});

export const selectAllPreviews = (state) => state.articlePreviews.articles;
export const isLoading = (state) => state.isLoadingPreviews;
export default articlePreviewsSlice.reducer;
