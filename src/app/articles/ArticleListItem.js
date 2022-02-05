import React from "react";
import { useSelector } from "react-redux";
// import { Link } from 'react-router-dom';
import { selectArticles } from "./articlesSlice";
import { selectSearchTerm } from "../nav/navSlice";

export const displayDatePosted = (current, article) => {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerMonth * 365;
  const elapsed = current - article.created * 1000;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago';
  } else if (elapsed < msPerMonth) {
    return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
  } else if (elapsed < msPerYear) {
    return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
  } else {
    return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
  };
};

export const displayScore = (article) => {
  const score = article.score;
  if (score > 1000) {
    return `${(score / 1000).toFixed(1)}k`;
  } else if (score === 0) {
    return 'vote';
  }
   else {
    return score;
  }
};

export default function ArticleListItem () {
  const articles = useSelector(selectArticles);
  const searchTerm = useSelector(selectSearchTerm);
  const current = Date.now();
  // console.log(current);

  const searchedArticles = articles.filter(article => {
    if (!article) {
      return <p>Nothing Matched!</p>
    } else {
      return (
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
        ||
        article.selftext.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });

  const renderListItem = searchedArticles.map((article) => {
    const { id, title, thumbnail, author } = article;
    // console.log(article);
    
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
          <p className="score">{displayScore(article)}</p>
          <img className="score-icon" src="/img/arrow-down.png" alt="vote-down" />
        </div>
        {getThumbnail()}
        <div className="article-info">
          <div className="full-article-info">
            <p className="posted-by">Posted by u/{author} {displayDatePosted(current, article)}</p>
            {/* <Link to={id}> */}
              <h2 className="full-title">{title}</h2>
            {/* </Link> */}
          </div>
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
