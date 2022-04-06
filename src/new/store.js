import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from './Articles/articlesSlice';
// import { navSlice } from "./Nav/navSlice";
import navReducer from './Nav/navSlice';

export const store = configureStore({
  reducer: {
    mainBody: articlesReducer,
    nav: navReducer
    // nav: navSlice,
  },
});
