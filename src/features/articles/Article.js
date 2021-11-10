import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoading,
  loadArticles,
  selectSubredditTitle,
  selectAllArticles,
} from "./articlesSlice";
import ArticleListItem from './ArticleListItem';

export default function ArticlePreviews() {
  const dispatch = useDispatch();
  const isLoadingPreviews = useSelector(isLoading);
  const subredditTitle = useSelector(selectSubredditTitle);
  const allArticles = useSelector(selectAllArticles)
  // console.log();

  useEffect(() => {
    dispatch(loadArticles(subredditTitle))
  }, [dispatch, subredditTitle]);

  if (isLoadingPreviews) {
    return <div>Loading state...</div>
  }

  return (
    <main className="main-articles">
      {allArticles.map((article) => {
        // console.log(article);
        return <ArticleListItem key={article.id} article={article} />
      })}
    </main>
  );
};
