import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from './Articles/articlesSlice';

export const store = configureStore({
  reducer: {
    mainBody: articlesReducer,
  },
});
