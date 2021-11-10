import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './articles/articlesSlice';
import asideReducer from './aside/asideSlice';
import navSlice from './nav/navSlice';

export const store = configureStore({
  reducer: {
    main: articlesReducer,
    aside: asideReducer,
    nav: navSlice,
  },
});
