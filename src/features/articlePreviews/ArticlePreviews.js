import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchTerm,
  isLoading,
  loadFromSubreddit
} from "./articlePreviewsSlice";
import SearchPreview from '../../components/Search';

export default function ArticlePreviews() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const isLoadingPreviews = useSelector(isLoading);

  useEffect(() => {
    dispatch(loadFromSubreddit('funny'))
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
