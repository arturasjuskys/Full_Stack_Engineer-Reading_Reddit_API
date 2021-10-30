import React from 'react';
import './App.css';
import ArticlePreviews from '../features/articlePreviews/ArticlePreviews';
import AsidePreview from '../features/asidePreview/AsidePreview';

function App() {
  return (
    <div className="App">
      <div className="app-articles">
        <ArticlePreviews />
      </div>
      <div className="app-aside">
        <AsidePreview />
        </div>
    </div>
  );
}

export default App;
