import React from 'react';
// Actual Article

export default function FullArticle({ article }) {
  return (
    <article>
      <div className="ratings-container">
        <img className="arrow-up" src="/img/arrow-up.png" alt="upvote arrow" />
        <p>{article.rating}</p>
        <img className="arrow-down" src="/img/arrow-down.png" alt="down vote arrow" />
      </div>
      <div className="article-container">
        <div className="header-container">
          <a href="/" className="collection">{article.collection}</a>
          <p>Posted by</p>
          <a href="/" className="user">{article.user}</a>
          <p>{article.posted}</p>
        </div>
        <h2>{article.title}</h2>
        {article.img ? <img src={article.img} alt="alt" /> : null}
        <div className="comments-container">
          <button>Comments</button>
        </div>
      </div>
    </article>
  );
};
