import React from 'react';

export default function Subreddit({subreddit}) {
  // const handleClick = onClick();
  return (
    <li className="subreddit">{subreddit.title}</li>
  );
};
