import React from 'react';
import ReactMarkdown from 'react-markdown';
// import { loadFromReddit } from '../features/articlePreviews/articlePreviewsSlice';
// Actual Article

const Media = (article) => {
  if (!article.url_overridden_by_dest) return null;
  if (article.url_overridden_by_dest) {
    if (article.url_overridden_by_dest.includes('.jpg')) {
      return <img src={article.url} alt="alt" />
    }
  }
  if (article.post_hint) {
    return 'This Reddit post contains embedded video/gif'
  }
};

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
        {Media(article)}
        {article.selftext ? <ReactMarkdown children={article.selftext} /> : null}
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