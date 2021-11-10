import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ArticleListItem from "./ArticleListItem";
import { loadArticles } from "./articlesSlice";

export default function Articles() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadArticles('funny'));
  }, [dispatch]);

  return (
    <main className="main-articles">
      <p>Article Listing</p>
      <ArticleListItem />
    </main>
  );
};
