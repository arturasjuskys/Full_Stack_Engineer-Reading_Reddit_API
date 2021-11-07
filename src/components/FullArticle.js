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

const postedDate = (article) => {
  const timeStamp = article.created;
  const time = new Date(timeStamp * 1000);
  // const now = new Date();
  // const howLongAgo = now - time;
  // console.log(time);
  // console.log(howLongAgo);
  // console.log(timeStamp.toString());
  // console.log(`${time.getFullYear()} ${time.getMonth()} ${time.getDay()} ${time.getHours()}`);
  // if (time.getDay() < 2) return `${time.getHours()} hours ago`;
  // if (time.getMonth() < 2 || time.getDay() > 2) {
  //   return `${time.getDay()} days ago`;
  return time.toUTCString();
  // }
};

// postedDate();

export default function FullArticle({ article }) {
  return (
    <article>
      <div className="ratings-container">
        <img className="arrow-up" src="/img/arrow-up.png" alt="upvote arrow" />
        <p>{article.score ? article.score : 0}</p>
        <img className="arrow-down" src="/img/arrow-down.png" alt="down vote arrow" />
      </div>
      <div className="article-container">
        <div className="header-container">
          <a href="/" className="collection">{article.subreddit ? article.subreddit : 'Collection not found'}</a>
          <p>Posted by</p>
          <a href="/" className="user">{article.author ? article.author : 'Author not found'}</a>
          {/* <p>{` ${article.created}`}</p> */}
          <p>{postedDate(article)}</p>
        </div>
        <h2>{article.title ? article.title : 'Title not found'}</h2>
        {Media(article)}
        {article.selftext ? <ReactMarkdown children={article.selftext} /> : null}
        <div className="comments-container">
          <button>Comments</button>
          <button><a href={`http://reddit.com/${article.permalink}`} target="_blank" rel="noopener noreferrer">Reddit</a></button>
        </div>
      </div>
    </article>
  );
};
