import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadFromSubreddit,
} from '../articlePreviews/articlePreviewsSlice';
import {
  isLoadingSubreddits,
}
from "./asidePreviewSlice";

export default function Aside () {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSubreddits);

  if (isLoading) {
    return <div>Loading Subreddits</div>
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(loadFromSubreddit(e.target.innerHTML));
  };

  return (
    <aside id="aside">
      <h2>Subreddits</h2>
        <ul>
          <li><a href="/" onClick={handleClick}>Home</a></li>
          <li><a href="/" onClick={handleClick}>memes</a></li>
          <li><a href="/" onClick={handleClick}>funny</a></li>
          <li><a href="/" onClick={handleClick}>gaming</a></li>
        </ul>
    </aside>
  );
};
