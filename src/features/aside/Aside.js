import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadArticles } from '../articles/articlesSlice';
import { isLoadingSubreddits, selectAllSubreddits } from "./asideSlice";
import AsideListItem from './AsideListItem';

export default function Aside () {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSubreddits);
  const subreddits = useSelector(selectAllSubreddits);
  
  if (isLoading) {
    return <div>Loading Subreddits</div>
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(loadArticles(e.target.innerHTML));
  };

  return (
    <aside className="main-aside">
      <h2>Subreddits</h2>
        <ul onClick={handleClick}>
          {subreddits.map((subreddit, index) => {
            return (
              <Link key={index} to="/">
                <AsideListItem subreddit={subreddit} />
              </Link>
            );
          })}
        </ul>
    </aside>
  );
};
