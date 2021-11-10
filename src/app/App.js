import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './nav/Nav';
import Aside from './aside/Aside';
import ArticleListing from './articles/ArticleListing';
import ArticleDetails from './articles/ArticleDetails';

function App () {
  return (
    <div className="App">
      <div className="App-main">
        <Nav />
        <Aside />
        <Switch>
        <Route exact path="/">
          <ArticleListing />
        </Route>
        <Route path="/:id">
          <ArticleDetails />
        </Route>
      </Switch>
      </div>
    </div>
  );
};

export default App;
