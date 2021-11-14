import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadArticles, selectSubreddit, updateSubreddit } from '../articles/articlesSlice';
import { isLoadingSubreddits, selectAllSubreddits } from "./asideSlice";
import AsideListItem from './AsideListItem';
import './Aside.css';

export default function Aside () {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSubreddits);
  const subreddits = useSelector(selectAllSubreddits);
  let title = useSelector(selectSubreddit);
  
  const handleClick = (e) => {
    e.preventDefault();
    title = e.target.innerHTML;
    dispatch(loadArticles(e.target.innerHTML));
    dispatch(updateSubreddit(title));
  };
  
  if (isLoading) {
    return <div>Loading Subreddits</div>
  };

  return (
    <aside className="main-aside">
      <h2>Subreddits</h2>
        <ul className="aside-ul" onClick={handleClick}>
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
