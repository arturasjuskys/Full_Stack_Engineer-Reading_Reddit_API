import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../features/articles/articlesSlice';
import asidePreviewReducer from '../features/aside/asideSlice';

export const store = configureStore({
  reducer: {
    main: articlesReducer,
    aside: asidePreviewReducer,
  },
});
