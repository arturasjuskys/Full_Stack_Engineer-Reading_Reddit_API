import React from "react";

export default function ArticleListItem ({article}) {
  const thumbnail = () => {
    const img = article.thumbnail;
    if (img.includes('.png') || img.includes('.jpg')) {
      return <img className="article-thumbnail" src={article.thumbnail} alt="thumbnail" />
    } else {
      return;
    }    
  };
  
  return (
    <article className="article">
      <div className="article-score">
        <img className="score-icon" src="/img/arrow-up.png" alt="vote-up" />
        <p className="score">{article.score}</p>
        <img className="score-icon" src="/img/arrow-down.png" alt="vote-down" />
      </div>
      {thumbnail()}
      <div className="article-info">
        <h2 className="info-title">{article.title}</h2>
        <div className="info-comments">
          <img className="comments-icon" src="/img/comment.png" alt="comments icon" />
          <p className="comments">2.4k comments</p>
        </div>
      </div>
    </article>
  );
};
