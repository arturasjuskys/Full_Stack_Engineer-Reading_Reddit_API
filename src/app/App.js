import React from 'react';

import './App.css';
import Nav from './nav/Nav';
import ArticleListing from './articles/ArticleListing';

function App () {
  return (
    <div className="App">
      <Nav />
      <ArticleListing />
    </div>
  );
};

export default App;
