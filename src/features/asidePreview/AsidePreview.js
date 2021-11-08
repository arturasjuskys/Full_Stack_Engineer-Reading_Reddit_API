import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadFromSubreddit,
  // selectSubredditTitle,
} from '../articlePreviews/articlePreviewsSlice';
import {
  isLoadingSubreddits,
  selectAllSubreddits,
}
from "./asidePreviewSlice";
import AsideListItem from './AsideListItem';
import { Link } from 'react-router-dom';

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
            return (
              <Link to="/">
                <AsideListItem
                  key={subreddit.title}
                  subreddit={subreddit}
                />
              </Link>
            )
          })}
        </ul>
    </aside>
  );
};
