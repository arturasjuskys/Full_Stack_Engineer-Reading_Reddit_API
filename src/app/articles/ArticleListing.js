import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleListItem from "./ArticleListItem";
import { loadArticles, selectSubreddit } from "./articlesSlice";

export default function Articles() {
  const dispatch = useDispatch();
  const title = useSelector(selectSubreddit);

  useEffect(() => {
    dispatch(loadArticles(title));
  }, [dispatch]);

  return (
    <main className="main-articles">
      <p>Article Listing</p>
      <ArticleListItem />
    </main>
  );
};
