import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadFromSubreddit,
  selectSubredditTitle,
} from '../articlePreviews/articlePreviewsSlice';
import {
  isLoadingSubreddits,
  selectAllSubreddits,
}
from "./asidePreviewSlice";
import AsideListItem from './AsideListItem';

export default function AsidePreview () {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSubreddits);
  const subreddits = useSelector(selectAllSubreddits);
  
  if (isLoading) {
    return <div>Loading Subreddits</div>
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(loadFromSubreddit(e.target.innerHTML));
  };

  return (
    <aside className="main-aside">
      <h2>Subreddits</h2>
        <ul onClick={handleClick}>
          {subreddits.map((subreddit) => {
            return <AsideListItem
              key={subreddit.title}
              subreddit={subreddit}
              />
          })}
        </ul>
    </aside>
  );
};
