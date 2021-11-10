import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './articles/articlesSlice';
import asideReducer from './aside/asideSlice';

export const store = configureStore({
  reducer: {
    main: articlesReducer,
    aside: asideReducer,
  },
});
