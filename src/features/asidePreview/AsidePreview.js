import React, { useEffect } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadSubreddit,
  isLoadingSubreddits,
  // selectAllSubreddits
}
from "./asidePreviewSlice";
// import Subreddit from '../../components/Subreddit';

export default function Aside () {
  const dispatch = useDispatch();
  // const subreddits = useSelector(selectAllSubreddits);
  const isLoading = useSelector(isLoadingSubreddits);

  // console.log('subreddits', subreddits);

  useEffect(() => {
    dispatch(loadSubreddit());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading Subreddits</div>
  };

  return (
    <aside id="aside">
      <h2>Subreddits</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">memes</a></li>
          <li><a href="/">funny</a></li>
          <li><a href="/">gaming</a></li>
        </ul>
    </aside>
  );
};
