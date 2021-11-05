import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // selectAllPreviews,
  selectFromReddit,
  // loadAllPreviews,
  // loadFromReddit,
  isLoading,
  loadFromHome,
  loadFromMemes,
  loadFromFunny,
  loadFromGaming
} from "./articlePreviewsSlice";
import FullArticle from '../../components/FullArticle';

export default function ArticlePreviews() {
  const dispatch = useDispatch();
  // const articlePreviews = useSelector(selectAllPreviews);
  const articlesFromReddit = useSelector(selectFromReddit);
  const isLoadingPreviews = useSelector(isLoading);
  let subredditName = 'Reddit';
  
  useEffect(() => {
    // dispatch(loadAllPreviews());
    // dispatch(loadFromMemes())
    dispatch(loadFromFunny())
    // dispatch(loadFromGaming())
    // dispatch(loadFromHome())
  }, [dispatch]);
  console.log(articlesFromReddit);

  if (articlesFromReddit.length > 0) {
    subredditName = articlesFromReddit[0].subreddit;
  }

  if (isLoadingPreviews) {
    return <div>Loading state...</div>
  }

  return (
    <>
      <h1>From {subredditName}</h1>
      {articlesFromReddit.map((article) => {
        return <FullArticle article={article} key={article.id} />
      })}
    </>
  );
};
