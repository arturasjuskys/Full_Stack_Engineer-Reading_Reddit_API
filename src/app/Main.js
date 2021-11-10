import React from "react";
import { Switch, Route } from 'react-router-dom';
import ArticlePreviews from "../features/articles/Articles";
import FullArticle from '../components/FullArticle';

export default function Main () {
  return (
    <main className="full-articles">
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
