import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // selectAllPreviews,
  selectFromReddit,
  // loadAllPreviews,
  loadFromReddit,
  isLoading
} from "./articlePreviewsSlice";
import FullArticle from '../../components/FullArticle';

export default function ArticlePreviews() {
  const dispatch = useDispatch();
  // const articlePreviews = useSelector(selectAllPreviews);
  const articlesFromReddit = useSelector(selectFromReddit);
  const isLoadingPreviews = useSelector(isLoading);

  
  useEffect(() => {
    // dispatch(loadAllPreviews());
    dispatch(loadFromReddit())
  }, [dispatch]);
  
  // console.log('articles:', articlePreviews);
  // console.log('from Reddit:', articlesFromReddit);
  console.log('Reddit:', articlesFromReddit);

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
      <h1>From Reddit</h1>
      {articlesFromReddit.data.children.map((article) => {
        return <FullArticle article={article.data} />
      })}
    </>
  );
};
