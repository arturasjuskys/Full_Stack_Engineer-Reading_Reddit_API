import React from 'react';
import './App.css';
import ArticlePreviews from '../features/articlePreviews/ArticlePreviews';
import AsidePreview from '../features/asidePreview/AsidePreview';

function App() {
  return (
    <div className="App">
      <ArticlePreviews />
      <AsidePreview />
    </div>
  );
}

export default App;
