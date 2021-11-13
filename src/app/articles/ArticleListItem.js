import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { selectArticles } from "./articlesSlice";
import { selectSearchTerm } from "../nav/navSlice";

export default function ArticleListItem () {
  const articles = useSelector(selectArticles);
  const searchTerm = useSelector(selectSearchTerm);

  const searchedArticles = articles.filter(article => {
    return (
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
      ||
      article.selftext.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

  const renderListItem = searchedArticles.map((article) => {
    const { id, score, title, thumbnail } = article;
    
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
