import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadAllSubreddits,
  isLoadingSubreddits,
  selectAllSubreddits
}
from "./asidePreviewSlice";
import Subreddit from '../../components/Subreddit';

export default function Aside () {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectAllSubreddits);
  const isLoading = useSelector(isLoadingSubreddits);

  // console.log('subreddits', subreddits);

  useEffect(() => {
    dispatch(loadAllSubreddits());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading Subreddits</div>
  };

  return (
    <aside id="aside">
      <h2>Subreddits</h2>
      <ul>
        {subreddits.map((subreddit) => {
          return <Subreddit subreddit={subreddit} key={subreddit.id} />
        })}    
      </ul>
    </aside>
  );
};
