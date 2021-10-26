import React from 'react';
import './App.css';
import ArticlePreviews from '../features/articlePreviews/ArticlePreviews';
import Aside from '../features/aside/Aside';

function App() {
  return (
    <div className="App">
      <ArticlePreviews />
      <Aside />
    </div>
  );
}

export default App;
