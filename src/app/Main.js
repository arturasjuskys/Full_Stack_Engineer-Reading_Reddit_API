import React from "react";
import { Switch, Route } from 'react-router-dom';
import ArticlePreviews from "../features/articles/Article";
import FullArticle from '../components/FullArticle';

export default function Main () {
  return (
    <main className="full-articles">
      {/* <h2>Posts</h2> */}
      <Switch>
        <Route exact path="/">
          <ArticlePreviews />
        </Route>
        <Route path="/:id">
          <FullArticle />
        </Route>
      </Switch>
    </main>
  );
};
