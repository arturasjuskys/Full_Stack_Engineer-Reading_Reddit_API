import React from 'react';
import { loadIcon } from './Aside';

export default function Subreddit({subreddit}) {
  return (
    <li className="subreddit" data-subreddit={subreddit.title}>{loadIcon(subreddit)}{subreddit.title}</li>
  );
};
