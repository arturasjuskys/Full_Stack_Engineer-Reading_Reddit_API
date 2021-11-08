import React from 'react';
import './App.css';
import AsidePreview from '../features/asidePreview/AsidePreview';
// import Nav from '../features/nav/Nav';
// import ArticlePreviews from '../features/articlePreviews/ArticlePreviews';
import Main from './Main';

function App () {
  return (
    <div className="App">
      {/* <Nav /> */}
      <div className="App-main">
        <AsidePreview />
        <Main />
        {/* <ArticlePreviews /> */}
      </div>
    </div>
  );
};

export default App;
