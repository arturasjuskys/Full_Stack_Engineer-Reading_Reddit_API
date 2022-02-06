import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadArticles, selectSubreddit } from "./articlesSlice";
import Article from './Article';

export default function ArticlesList () {
  const dispatch = useDispatch();
  const subreddit = useSelector(selectSubreddit);
  // console.log(subreddit);

  useEffect(() => {
    dispatch(loadArticles(subreddit));
  }, [dispatch, subreddit]);

  return (
    <main>
      <Article />
    </main>
  );
};
