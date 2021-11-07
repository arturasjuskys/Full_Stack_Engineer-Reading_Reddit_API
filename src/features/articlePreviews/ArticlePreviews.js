import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // selectAllPreviews,
  // selectFromReddit,
  selectSearchTerm,
  // loadAllPreviews,
  // loadFromReddit,
  isLoading,
  // loadFromHome,
  // loadFromMemes,
  loadFromFunny,
  // loadFromGaming
} from "./articlePreviewsSlice";
// import FullArticle from '../../components/FullArticle';
import SearchPreview from '../../components/Search';

export default function ArticlePreviews() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const isLoadingPreviews = useSelector(isLoading);

  useEffect(() => {
    // dispatch(loadAllPreviews());
    // dispatch(loadFromMemes())
    dispatch(loadFromFunny())
    // dispatch(loadFromGaming())
    // dispatch(loadFromHome())
  }, [dispatch]);

  if (isLoadingPreviews) {
    return <div>Loading state...</div>
  }

  return (
    <>
      <SearchPreview searchTerm={searchTerm} />
    </>
  );
};
