import React from 'react';

export default function Subreddit({subreddit}) {
  // const handleClick = onClick();
  return (
    <li className="subreddit"><a href="/">{subreddit.title}</a></li>
  );
};
