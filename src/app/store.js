import { configureStore } from '@reduxjs/toolkit';
import articlePreviewsReducer from '../features/articlePreviews/articlePreviewsSlice';
import asidePreviewReducer from '../features/asidePreview/asidePreviewSlice';

export const store = configureStore({
  reducer: {
    articlePreviews: articlePreviewsReducer,
    asidePreviews: asidePreviewReducer,
  },
});
