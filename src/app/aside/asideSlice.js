import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadAbout = createAsyncThunk(
  'aside/loadAbout',
  async () => {
    const dataHome = await fetch(` https://www.reddit.com/r/Home/about.json`);
    const dataMemes = await fetch(` https://www.reddit.com/r/memes/about.json`);
    const dataFunny = await fetch(` https://www.reddit.com/r/funny/about.json`);
    const dataGaming = await fetch(` https://www.reddit.com/r/gaming/about.json`);
    const jsonHome = await dataHome.json();
    const jsonMemes = await dataMemes.json();
    const jsonFunny = await dataFunny.json();
    const jsonGaming = await dataGaming.json();
    return [
      {
        title: 'Home',
        data: jsonHome.data,
      },
      {
        title: 'memes',
        data: jsonMemes.data,
      },
      {
        title: 'funny',
        data: jsonFunny.data,
      },
      {
        title: 'gaming',
        data: jsonGaming.data,
      },
    ];
  }
);

export const asideSlice = createSlice({
  name: 'aside',
  initialState: {
    isLoadingSubreddits: false,
    failedToLoadSubreddits: false,
    isLoadingAbout: false,
    failedToLoadAbout: false,
    subreddits: [
      {
        title: 'Home',
        data: '',
      },
      {
        title: 'memes',
        data: '',
      },
      {
        title: 'funny',
        data: '',
      },
      {
        title: 'gaming',
        data: '',
      },
    ],
  },
  extraReducers: {
    [loadAbout.pending]: (state, action) => {
      state.isLoadingAbout = true;
      state.failedToLoadAbout = false;
    },
    [loadAbout.fulfilled]: (state, action) => {
      state.isLoadingAbout = false;
      state.failedToLoadAbout = false;
      state.subreddits = action.payload;
    },
    [loadAbout.rejected]: (state, action) => {
      state.isLoadingAbout = false;
      state.failedToLoadAbout = true;
    },
  },
});

export const isLoadingSubreddits = (state) => state.aside.isLoadingSubreddits;
export const selectAllSubreddits = (state) => state.aside.subreddits;
export default asideSlice.reducer;
