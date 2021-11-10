import React from "react";
import { Link } from 'react-router-dom';

export default function ArticleListItem () {
  return (
    <article className="article">
      <Link to="/post">
        <div className="article-score">
          <img className="score-icon" src="/img/arrow-up.png" alt="vote-up" />
          <p className="score">score</p>
          <img className="score-icon" src="/img/arrow-down.png" alt="vote-down" />
        </div>
        <p>Thumbnail</p>
        <div className="article-info">
            <h2 className="info-title">title</h2>
          <div className="info-comments">
          </div>
        </div>
      </Link>
    </article>
  );
};
