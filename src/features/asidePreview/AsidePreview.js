import React, { useEffect } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadFromHome,
  loadFromMemes,
  loadFromFunny,
  loadFromGaming
} from '../articlePreviews/articlePreviewsSlice';
// import { loadFromMemes } from '../articlePreviews/articlePreviewsSlice';
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

  useEffect(() => {
    dispatch(loadSubreddit());
  }, [dispatch]);

  // console.log('subreddits', subreddits);
  const handleClickHome = (e) => {
    e.preventDefault();
    dispatch(loadFromHome());
  };

  const handleClickMemes = (e) => {
    e.preventDefault();
    dispatch(loadFromMemes());
  };

  const handleClickFunny = (e) => {
    e.preventDefault();
    dispatch(loadFromFunny());
  };

  const handleClickGaming = (e) => {
    e.preventDefault();
    dispatch(loadFromGaming());
  };

  if (isLoading) {
    return <div>Loading Subreddits</div>
  };

  return (
    <aside id="aside">
      <h2>Subreddits</h2>
        <ul>
          <li><a href="/" onClick={handleClickHome}>Home</a></li>
          <li><a href="/" onClick={handleClickMemes}>memes</a></li>
          <li><a href="/" onClick={handleClickFunny}>funny</a></li>
          <li><a href="/" onClick={handleClickGaming}>gaming</a></li>
        </ul>
    </aside>
  );
};
