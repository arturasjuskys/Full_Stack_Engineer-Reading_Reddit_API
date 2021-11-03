import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // selectAllPreviews,
  selectFromReddit,
  // loadAllPreviews,
  // loadFromReddit,
  isLoading,
  loadFromMemes
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
    dispatch(loadFromMemes())
  }, [dispatch]);
  console.log(articlesFromReddit);

  if (articlesFromReddit.length > 0) {
    subredditName = articlesFromReddit[0].subreddit;
  }
  
  // console.log('articles:', articlePreviews);
  // console.log('from Reddit:', articlesFromReddit);
  // console.log('Reddit:', articlesFromReddit);

  if (isLoadingPreviews) {
    return <div>Loading state...</div>
  }

  // From mock .json file
  // return (
  //   <>
  //     <section>
  //       <h1>All Reddit Client Articles</h1>
  //       {articlePreviews.map((article) => {
  //         return <FullArticle article={article} key={article.id} />
  //       })}
  //     </section>
  //   </>
  // );

  return (
    <>
      <h1>From {subredditName}</h1>
      {/* <h1>From {articlesFromReddit[0].subreddit}</h1> */}
      {articlesFromReddit.map((article) => {
        return <FullArticle article={article} />
      })}
    </>
  );
};
