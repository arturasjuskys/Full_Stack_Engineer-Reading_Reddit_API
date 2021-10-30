import React from 'react';

export default function Subreddit({ subreddit }) {
  return (
    // <li><img src={subreddit.img} alt="#" /> <a href="/">{subreddit.name}</a></li>
    <li><a href="/">{subreddit.name}</a></li>
  );
};
