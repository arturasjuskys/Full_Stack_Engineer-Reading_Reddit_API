import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllPreviews,
  loadAllPreviews,
  isLoading
} from "./articlePreviewsSlice";
import FullArticle from '../../components/FullArticle';

export default function ArticlePreviews() {
  const dispatch = useDispatch();
  const articlePreviews = useSelector(selectAllPreviews);
  const isLoadingPreviews = useSelector(isLoading);

  // console.log('articles:', articlePreviews);

  useEffect(() => {
    dispatch(loadAllPreviews());
  }, [dispatch]);

  if (isLoadingPreviews) {
    return <div>Loading state...</div>
  }

  return (
    <>
      <section>
        <h1>All Reddit Client Articles</h1>
        {articlePreviews.map((article) => {
          return <FullArticle article={article} key={article.id} />
        })}
      </section>
    </>
  );
};
