import React from 'react';
// import { loadFromReddit } from '../features/articlePreviews/articlePreviewsSlice';
// Actual Article

export default function FullArticle({ article }) {
  return (
    <article>
      <div className="ratings-container">
        <img className="arrow-up" src="/img/arrow-up.png" alt="upvote arrow" />
        <p>{article.score ? article.score : 'Rating not found'}</p>
        <img className="arrow-down" src="/img/arrow-down.png" alt="down vote arrow" />
      </div>
      <div className="article-container">
        <div className="header-container">
          <a href="/" className="collection">{article.subreddit ? article.subreddit : 'Collection not found'}</a>
          <p>Posted by</p>
          <a href="/" className="user">{article.author ? article.author : 'Author not found'}</a>
          <p>{` ${article.created}`}</p>
        </div>
        <h2>{article.title ? article.title : 'Title not found'}</h2>
        {article.img ? <img src={article.img} alt="alt" /> : null}
        {article.selftext ? article.selftext : article.link_flair_text}
        <div className="comments-container">
          <button>Comments</button>
          <a href={`http://reddit.com/${article.permalink}`} target="_blank" rel="noopener noreferrer">Open in reddit.com</a>
        </div>
      </div>
    </article>
  );
};

// https://www.reddit.com/r/cataclysmdda/comments/qj3l0a/should_i_turn_on_monster_evolution/
// https://www.reddit.com/r/cataclysmdda/comments/qj3l0a/should_i_turn_on_monster_evolution/