import React from 'react';

export default function Subreddit({subreddit}) {
  return (
    <li className="subreddit">{subreddit.title}</li>
  );
};
