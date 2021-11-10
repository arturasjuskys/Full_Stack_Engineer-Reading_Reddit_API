import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { selectArticles } from "./articlesSlice";

export default function ArticleListItem () {
  const articles = useSelector(selectArticles);
  // console.log(articles);

  const renderListItem = articles.map((article) => {
    const { id, score, title, thumbnail } = article;
    // console.log(article);
    // console.log(thumbnail);
    
    const getThumbnail = () => {
      if (thumbnail.includes('.jpg')) {
        return <img className="article-thumbnail" src={article.thumbnail} alt="thumbnail" />
      } else {
        return null;
      };
    };
        
    return (
      <article key={id} className="article">
        <div className="article-score">
          <img className="score-icon" src="/img/arrow-up.png" alt="vote-up" />
          <p className="score">{score}</p>
          <img className="score-icon" src="/img/arrow-down.png" alt="vote-down" />
        </div>
        {getThumbnail()}
        <div className="article-info">
          <Link to={id}>
            <h2 className="info-title">{title}</h2>
          </Link>
          <div className="info-comments"></div>
        </div>
      </article>
    );
  });

  return (
    <>
      {renderListItem}
    </>
  );
};
