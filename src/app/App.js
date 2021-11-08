import React from 'react';
import './App.css';
import AsidePreview from '../features/asidePreview/AsidePreview';
// import Nav from '../features/nav/Nav';
import ArticlePreviews from '../features/articlePreviews/ArticlePreviews';

function App () {
  return (
    <div className="App">
      {/* <Nav /> */}
      <div className="App-main">
        <AsidePreview />
        <ArticlePreviews />
      </div>
    </div>
  );
};

export default App;
