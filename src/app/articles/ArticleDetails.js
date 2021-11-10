import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function FullArticle() {
  return (
    <article className="full-article">
      <p>Article Details</p>
      <div className="article-score">
        <img className="score-icon" src="/img/arrow-up.png" alt="vote-up" />
        <p className="score">score</p>
        <img className="score-icon" src="/img/arrow-down.png" alt="vote-down" />
      </div>
      <div className="article-container">
        <div className="full-article-info">
          <p className="posted-by">Posted by u/author</p>
          <h2 className="full-title">title</h2>
        </div>
        <p>IMage/Video</p>
        <ReactMarkdown>selftext</ReactMarkdown>
        <div className="info-comments">
          <img className="comments-icon" src="/img/comment.png" alt="comments icon" />
          <p className="comments">For comments</p>
          <a className="open-reddit" rel="noreferrer" target="_blank" href="/">Open in Reddit</a>
        </div>
      </div>
    </article>
  );
};
